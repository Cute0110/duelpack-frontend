"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Modal } from "antd";
import axiosInstance from "@/lib/action";
import { useAuth } from "@/lib/authContext";
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import { eot, dot } from '@/lib/cryptoUtils';
import GoogleImg from '@/public/images/google.svg';
import { useRouter } from "next/navigation";

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const AuthModal = ({ isModalOpen, onModalClose, modalType, referCode }: any) => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(modalType);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsConfirmation: true,
        rememberMeConfirmation: false,
    });

    const { setIsAuthenticated, setAuthData } = useAuth();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        setIsLogin(modalType);
    }, [modalType]);

    const openNotification = (type: NotificationType, title: any, content: any, placement: NotificationPlacement) => {
        api[type]({
            message: title,
            description: content,
            duration: 2,
            placement,
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        if (isLogin) {
            try {
                const response = await axiosInstance.post('/api/login', eot({ emailAddress: formData.email, password: formData.password }));
                const res = dot(response.data);
                if (res.status == 1) {
                    openNotification('success', 'Success', 'Logged In successfully!', 'topRight');
                    const token = res.token;
                    localStorage.setItem('authToken', token);
                    setIsAuthenticated(true);
                    setAuthData(res.userData);
                    onModalClose();
                } else {
                    openNotification('error', 'Error', res.msg, 'topRight');
                }
            } catch (error) {
                openNotification('error', 'Error', "Login Failed!", 'topRight');
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const response = await axiosInstance.post('/api/register', eot({ emailAddress: formData.email, password: formData.password, referCode }));
                const res = dot(response.data);
                if (res.status == 1) {
                    openNotification('success', 'Success', 'Registered successfully!', 'topRight');
                    setIsLogin(true);
                } else {
                    openNotification('error', 'Error', res.msg, 'topRight');
                }
            } catch (error) {
                openNotification('error', 'Error', "Login Failed!", 'topRight');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleForgotPassword = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    const handleOk = () => {
        onModalClose();
    };

    const handleCancel = () => {
        onModalClose();
    };

    const signInWithGoogle = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);

            try {
                const response = await axiosInstance.post('/api/google_login', eot({ emailAddress: result.user.email, password: "", referCode }));
                const res = dot(response.data);
                if (res.status == 1) {
                    openNotification('success', 'Success', 'Logged In successfully!', 'topRight');
                    const token = res.token;
                    localStorage.setItem('authToken', token);
                    setIsAuthenticated(true);
                    setAuthData(res.userData);
                    onModalClose();
                } else {
                    openNotification('error', 'Error', res.msg, 'topRight');
                }
            } catch (error) {
                openNotification('error', 'Error', "Login Failed!", 'topRight');
            } finally {
                setIsLoading(false);
            }
        } catch (error) {
            openNotification('error', 'Error', "Login Failed!", 'topRight');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {contextHolder}
            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <div className="flex flex-col items-center bg-[#1d2125]">
                    <div className="w-full max-w-xl h-full bg-[#1d2125] rounded-lg shadow-md p-12">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-white text-2xl font-bold text-center">
                                {isLogin ? "Welcome Back" : "Welcome to DuelPack"}
                            </h2>
                            <h1 className="text-gray-400 text-lg text-center mb-4">
                                {isLogin ? "Sign In to Access Your Account" : "Sign Up to Get Started"}
                            </h1>
                            <button
                                className="flex justify-center items-center w-full gap-4 border border-gray-600 h-14 rounded-md"
                                onClick={signInWithGoogle}
                                type="button"
                                disabled={!formData.termsConfirmation || isLoading}
                            >
                                {isLoading ?
                                    <div className="h-full w-full flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white" />
                                    </div>
                                    :
                                    <>
                                        <GoogleImg className="h-6 w-auto text-gray-300" />
                                        <span className={`font-bold text-lg ${formData.termsConfirmation ? "text-white" : "text-gray-600"} `}>Sign in with Google</span>
                                    </>
                                }
                            </button>
                            <div className="my-4 text-white">
                                {/* <input
                                    type="checkbox"
                                    id="termsConfirmation"
                                    name="termsConfirmation"
                                    checked={formData.termsConfirmation}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                    required
                                /> */}
                                {/* <label htmlFor="termsConfirmation" className="text-white font-normal text-sm mt-[-4px]">
                                    By using Duel Pack you agree to the
                                </label> */}
                                By using Duel Pack, you agree to the<span className="underline cursor-pointer ml-[4px]">Terms & Conditions</span> .
                            </div>
                            <div className="flex items-center w-full gap-4 mb-4">
                                <div className="border-t-[1px] border-gray-600 flex-1"></div>
                                <span className="text-gray-600">or</span>
                                <div className="border-t-[1px] border-gray-600 flex-1"></div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-white font-semibold"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded-xl"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-white font-semibold"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded-xl pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                {isLogin && (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center my-4">
                                            <input
                                                type="checkbox"
                                                id="rememberMeConfirmation"
                                                name="rememberMeConfirmation"
                                                checked={formData.rememberMeConfirmation}
                                                onChange={handleInputChange}
                                                className="mr-2"
                                            />
                                            <label
                                                htmlFor="rememberMeConfirmation"
                                                className="text-white font-normal text-sm"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <button
                                            onClick={handleForgotPassword}
                                            className="text-sm text-[#4299e1] block text-right font-semibold mt-1 hover:text-[#529ae4]"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={`w-full bg-[#4299e1] ${formData.termsConfirmation ? "text-white" : "text-gray-600"} h-14 text-[22px] font-medium rounded-[10px] mt-4`}
                                disabled={!formData.termsConfirmation || isLoading}
                            >
                                {isLoading ?
                                    <div className="h-full w-full flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white" />
                                    </div> :
                                    <span>
                                        {isLogin ? "Sign In" : "Sign Up"}
                                    </span>
                                }
                            </button>
                        </form>
                        {isLogin ?
                            <p className="mt-4 text-sm mx-auto max-w-md text-center text-white">
                                <span className="font-semibold mr-2">Don't have an account?</span>
                                <span onClick={() => setIsLogin(false)} className="text-[#4299e1] cursor-pointer hover:text-[#529ae4]">
                                    Register
                                </span>
                            </p> :
                            <p className="mt-4 text-sm mx-auto max-w-md text-center text-white">
                                <span className="font-semibold mr-2">Already a user?</span>
                                <span onClick={() => setIsLogin(true)} className="text-[#4299e1] cursor-pointer hover:text-[#529ae4]">
                                    Login
                                </span>
                            </p>
                        }
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AuthModal;