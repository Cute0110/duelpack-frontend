import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const RewardsScreen = () => {
  return (
    <div className="relative w-full mt-[50px]">
      <div className="flex flex-1 relative w-full container ms-auto me-auto ps-4 pe-4 self-stretch">
        <div className="flex flex-row items-stretch gap-8 w-full">
          <div className="flex flex-1 items-stretch gap-6" style={{}}>
            <div className="flex flex-col flex-1 items-stretch max-w-full pb-48">
              <div
                className="flex flex-col w-full pt-8 pb-20 gap-6"
                data-sentry-component="PageContent"
                data-sentry-source-file="PageContent.tsx"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex justify-center items-center bg-gray-700 rounded-lg px-3 py-6">
                    <div
                      className="flex flex-col items-center gap-3 sm:gap-4 sm:max-w-60"
                      data-sentry-component="RewardCard"
                      data-sentry-source-file="RewardCard.tsx"
                    >
                      <div className="flex size-10 sm:size-14">
                        <svg
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-sentry-element="svg"
                          data-sentry-component="DailyRewardIcon"
                          data-sentry-source-file="Icon.tsx"
                        >
                          <rect
                            x="1.5"
                            y="1.5"
                            width={53}
                            height={53}
                            rx="26.5"
                            fill="#1D2125"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="rect"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M17.3345 39.5L15.0213 23.6852L19.2507 26.9489C20.3592 27.8043 21.954 27.5827 22.7872 26.4575L27.8101 19.6744L32.8465 26.4756C33.6667 27.5832 35.2286 27.8181 36.3383 27.0007L40.9213 23.6249L38.3089 39.5H17.3345Z"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <circle
                            cx="27.6153"
                            cy="13.3077"
                            r="2.30769"
                            fill="#57ABF8"
                            data-sentry-element="circle"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M15.3076 34.4614H39.923"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center w-full gap-2">
                        <p className="text-base text-white font-bold uppercase">
                          Daily Rewards
                        </p>
                        <div className="flex sm:w-40 md:w-56">
                          <p className="text-base text-gray-400 text-center">
                            Claim your bonus for your play in the last
                            day!
                          </p>
                        </div>
                      </div>
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 h-10 px-6 w-40"
                        disabled
                      >
                        <p className="text-sm">Nothing to Claim</p>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-gray-700 rounded-lg px-3 py-6">
                    <div
                      className="flex flex-col items-center gap-3 sm:gap-4 sm:max-w-60"
                      data-sentry-component="RewardCard"
                      data-sentry-source-file="RewardCard.tsx"
                    >
                      <div className="flex size-10 sm:size-14">
                        <svg
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-sentry-element="svg"
                          data-sentry-component="WeeklyRewardIcon"
                          data-sentry-source-file="Icon.tsx"
                        >
                          <rect
                            x="1.5"
                            y="1.5"
                            width={53}
                            height={53}
                            rx="26.5"
                            fill="#1D2125"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="rect"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M28.0423 18.2342L22.8942 23.4804C22.2734 24.113 22.7216 25.1808 23.6079 25.1808H25.7453C26.2976 25.1808 26.7453 25.6285 26.7453 26.1808V29.6873C26.7453 30.5974 27.8624 31.0344 28.4799 30.3657L33.2238 25.2294C33.8153 24.5888 33.361 23.5509 32.4891 23.5509H30.7561C30.2038 23.5509 29.7561 23.1032 29.7561 22.5509V18.9346C29.7561 18.0391 28.6695 17.5951 28.0423 18.2342Z"
                            fill="#57ABF8"
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <circle
                            cx={28}
                            cy={24}
                            r="12.5"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="circle"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M19 32V44.317C19 45.0757 19.8118 45.558 20.4782 45.1952L27.5218 41.3603C27.82 41.198 28.18 41.198 28.4782 41.3603L35.5218 45.1952C36.1882 45.558 37 45.0757 37 44.317V32"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center w-full gap-2">
                        <p className="text-base text-white font-bold uppercase">
                          Weekly Rewards
                        </p>
                        <div className="flex sm:w-40 md:w-56">
                          <p className="text-base text-gray-400 text-center">
                            Claim your bonus for your play in the last 7
                            days!
                          </p>
                        </div>
                      </div>
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 h-10 px-6 w-40"
                        disabled
                      >
                        <p className="text-sm">Nothing to Claim</p>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-gray-700 rounded-lg px-3 py-6">
                    <div
                      className="flex flex-col items-center gap-3 sm:gap-4 sm:max-w-60"
                      data-sentry-component="RewardCard"
                      data-sentry-source-file="RewardCard.tsx"
                    >
                      <div className="flex size-10 sm:size-14">
                        <svg
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-sentry-element="svg"
                          data-sentry-component="MonthlyRewardIcon"
                          data-sentry-source-file="Icon.tsx"
                        >
                          <rect
                            x="1.5"
                            y="1.5"
                            width={53}
                            height={53}
                            rx="26.5"
                            fill="#1D2125"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="rect"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M28.0384 17.2342L22.8903 22.4804C22.2695 23.113 22.7177 24.1808 23.604 24.1808H25.7414C26.2937 24.1808 26.7414 24.6285 26.7414 25.1808V28.6873C26.7414 29.5974 27.8585 30.0344 28.476 29.3657L33.2199 24.2294C33.8114 23.5888 33.3571 22.5509 32.4852 22.5509H30.7521C30.1999 22.5509 29.7521 22.1032 29.7521 21.5509V17.9346C29.7521 17.0391 28.6656 16.5951 28.0384 17.2342Z"
                            fill="#57ABF8"
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <circle
                            cx="27.9961"
                            cy={23}
                            r="12.5"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="circle"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M17.3379 30.4231L13.7033 41.6176C13.4367 42.4388 14.2529 43.227 15.0352 42.9037L18.8812 41.314C19.3413 41.1238 19.8781 41.3217 20.1295 41.7741L22.2412 45.5735C22.6672 46.3399 23.7612 46.2617 24.0322 45.4455L27.5 35"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                          <path
                            d="M38.7031 30.4231L42.3377 41.6176C42.6044 42.4388 41.7881 43.227 41.0059 42.9037L37.1598 41.314C36.6998 41.1238 36.1629 41.3217 35.9115 41.7741L33.7955 45.5812C33.3702 46.3463 32.2784 46.27 32.0055 45.4559L28.5 35"
                            stroke="#57ABF8"
                            strokeWidth={3}
                            data-sentry-element="path"
                            data-sentry-source-file="Icon.tsx"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center w-full gap-2">
                        <p className="text-base text-white font-bold uppercase">
                          Monthly Rewards
                        </p>
                        <div className="flex sm:w-40 md:w-56">
                          <p className="text-base text-gray-400 text-center">
                            Claim your bonus for your play in the last 30
                            days!
                          </p>
                        </div>
                      </div>
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 h-10 px-6 w-40"
                        disabled
                      >
                        <p className="text-sm">Nothing to Claim</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full rounded-lg gap-4">
                  <h2 className="text-2xl text-white font-bold mt-4">
                    Free Packs
                  </h2>
                  <div className="grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-4 md:grid-cols-5 gap-4">
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cluagy2jn01f6l814c3m528z3"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2c8gz0eb6oo5c502nz9vi_735659__mZ42HbLiu?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2c8gz0eb6oo5c502nz9vi_735659__mZ42HbLiu?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2c8gz0eb6oo5c502nz9vi_735659__mZ42HbLiu?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}2
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cluagx4ce0276l915uteie0yv"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2k51i11kyoo5cpp9qadzu_6340085__aogsvXFJA?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2k51i11kyoo5cpp9qadzu_6340085__aogsvXFJA?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2k51i11kyoo5cpp9qadzu_6340085__aogsvXFJA?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}10
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cluahc77e0018l313yplcz0v0"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2k2ir11g8oo5c1r3bsebr_714342___aWf_wl7J?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2k2ir11g8oo5c1r3bsebr_714342___aWf_wl7J?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2k2ir11g8oo5c1r3bsebr_714342___aWf_wl7J?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}20
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cluahcv28007mjw13fq8c5wrq"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2cflb0ekaoo5cac9e3583_7432446__swwaouq4j?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2cflb0ekaoo5cac9e3583_7432446__swwaouq4j?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2cflb0ekaoo5cac9e3583_7432446__swwaouq4j?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}30
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cluahenuc00gfjr1531z4i5li"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2c7bi0e9ioo5ceagylvsc_2422160__V9jceX3yc?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2c7bi0e9ioo5ceagylvsc_2422160__V9jceX3yc?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2c7bi0e9ioo5ceagylvsc_2422160__V9jceX3yc?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}40
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cm75wjmtk0000l20jl0lc636v"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq27qeh002soo5ckvvxquaj_5893402__HdeBpCLOS?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq27qeh002soo5ckvvxquaj_5893402__HdeBpCLOS?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq27qeh002soo5ckvvxquaj_5893402__HdeBpCLOS?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}50
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cm75wjqal0009l20j2l1m4zfi"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq27oai0000oo5cyvygrjbq_8517038__sY1aPuzHU?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq27oai0000oo5cyvygrjbq_8517038__sY1aPuzHU?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq27oai0000oo5cyvygrjbq_8517038__sY1aPuzHU?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}60
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cm75wm5oj0000jp0j18banppf"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}70
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cm75wnt7k000ejp0jooxnorko"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2cgqr0em0oo5c3n63yps4_5153854__2nIrIEfwk?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2cgqr0em0oo5c3n63yps4_5153854__2nIrIEfwk?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2cgqr0em0oo5c3n63yps4_5153854__2nIrIEfwk?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}80
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cm77ay5x60000i90iveu8wckk"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}90
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative"
                      data-sentry-component="Pack"
                      data-sentry-source-file="Pack.tsx"
                    >
                      <a
                        className="flex relative rounded-lg"
                        href="/rewards/cm77b5jgy000gi90ieq96qefk"
                      >
                        <img
                          alt="pack"
                          loading="lazy"
                          width={200}
                          height={304}
                          decoding="async"
                          data-nimg={1}
                          style={{
                            color: "transparent",
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-640 2x"
                          src="https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-640"
                        />
                      </a>
                      <div className="flex justify-center pt-3 pb-4">
                        <div className="font-bold text-md">
                          <div className="flex gap-2 items-center">
                            <svg
                              viewBox="0 0 74 89"
                              focusable="false"
                              className="chakra-icon css-onkibi"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37 13.7998C29.8999 13.7998 24.1997 19.5 24.1997 26.6001V33.7002H49.7998V26.6001C49.7998 19.5 44.1001 13.7998 37 13.7998ZM63.1001 33.7002V26.6001C63.1001 12.2002 51.3999 0.5 37 0.5C22.6001 0.5 10.8999 12.2002 10.8999 26.6001V33.7002H8.1001C4 33.7002 0.600098 37.1001 0.600098 41.2002V81C0.600098 85.1001 4 88.5 8.1001 88.5H65.8003C69.8999 88.5 73.3003 85.1001 73.3003 81V41.2002C73.3999 37 70 33.7002 65.8999 33.7002H63.1001ZM43.6001 75C44 74.6001 44.1001 74 43.8999 73.5L40.3999 61.8003C43.2002 60.5 45.1001 57.8003 45.1001 54.5C45.1001 50 41.5 46.4004 37 46.4004C32.5 46.4004 28.8999 50.1001 28.8999 54.5C28.8999 57.7002 30.8003 60.5 33.6001 61.8003L30.1001 73.5C30 74 30.1001 74.6001 30.3999 75C30.7002 75.4004 31.2002 75.7002 31.8003 75.7002H42.2002C42.8003 75.7002 43.3003 75.4004 43.6001 75Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="text-base text-white">
                              Free Level {/* */}100
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:flex flex-col w-56 items-stretch pt-8"
            data-sentry-component="LiveFeedSkeleton"
            data-sentry-source-file="LiveFeedSkeleton.tsx"
          >
            <div className="flex flex-1 overflow-hidden h-max relative flex-col">
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "0px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(8 8) rotate(34 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={6}
                            />
                            <g transform="translate(4 4) rotate(-4 18 18)">
                              <path
                                d="M13,20 a1,0.75 0 0,0 10,0"
                                fill="#000000"
                              ></path>
                              <rect
                                x={10}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={24}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="Snowflake Shape Rimless Sunglasses"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clpa8q4j8000cjv15memnvsbq_5955098__wN5nx-GQ8?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Snowflake Shape Rimless Sunglasses
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $17.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Snowball Fight"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clpank916000pjz173syzn4pn_1552946__OI1xvg_01?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "196px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(8 8) rotate(34 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={6}
                            />
                            <g transform="translate(4 4) rotate(-4 18 18)">
                              <path
                                d="M13,20 a1,0.75 0 0,0 10,0"
                                fill="#000000"
                              ></path>
                              <rect
                                x={10}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={24}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="Steam Gift Card"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clkxf158b0000l717mwecxs0s_4659983__rFGaTSG5E?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Steam Gift Card
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $10.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Time Check"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clky4z4uq000oms16jz9h6w13_7336305__x2pUFMnTY?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "392px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#0C8F8F" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(6 2) rotate(152 18 18) scale(1.2)"
                              fill="#EDF2F7"
                              rx={6}
                            />
                            <g transform="translate(0 -2) rotate(-2 18 18)">
                              <path
                                d="M15 21c2 1 4 1 6 0"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={12}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={22}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#4B69FF
"
                        />
                        <img
                          alt="Jordan 1 Retro High OG Light Fusion Red"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Jordan 1 Retro High OG Light Fusion Red
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $183.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Level 100 Free Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "588px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#0C8F8F" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(6 2) rotate(152 18 18) scale(1.2)"
                              fill="#EDF2F7"
                              rx={6}
                            />
                            <g transform="translate(0 -2) rotate(-2 18 18)">
                              <path
                                d="M15 21c2 1 4 1 6 0"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={12}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={22}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#829dbb
"
                        />
                        <img
                          alt="USB Gaming Mic"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          USB Gaming Mic
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $27.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Level 90 Free Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "784px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#0C8F8F" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-3 7) rotate(147 18 18) scale(1)"
                              fill="#EDF2F7"
                              rx={36}
                            />
                            <g transform="translate(-3 3.5) rotate(7 18 18)">
                              <path
                                d="M13,19 a1,0.75 0 0,0 10,0"
                                fill="#000000"
                              ></path>
                              <rect
                                x={12}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={22}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#E4AE33
"
                        />
                        <img
                          alt="LED Candles"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clnb4o60j002cl51843qjtkmj_5280077__E2aPOM_SL?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          LED Candles
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $30.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="LUCKY 30"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "980px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-5 -5) rotate(289 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 -4) rotate(-9 18 18)">
                              <path
                                d="M15 20c2 1 4 1 6 0"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={10}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={24}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="USB Gaming Mic"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          USB Gaming Mic
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $27.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Level 70 Free Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cljq2jy0h113yoo5cauj0gjn3_774052__Ia6taUKG-?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "1176px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-5 -5) rotate(289 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 -4) rotate(-9 18 18)">
                              <path
                                d="M15 20c2 1 4 1 6 0"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={10}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={24}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#829dbb
"
                        />
                        <img
                          alt="USB Gaming Mic"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2m44v17proo5c6otk4feu_5809912__tMKWlexHZ?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          USB Gaming Mic
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $27.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Level 90 Free Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cljq2k8t411tioo5clxy3zb9q_6482723__-ENQ5E5Dr?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "1372px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-5 -5) rotate(289 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 -4) rotate(-9 18 18)">
                              <path
                                d="M15 20c2 1 4 1 6 0"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={10}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={24}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#4B69FF
"
                        />
                        <img
                          alt="Jordan 1 Retro High OG Light Fusion Red"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2jqdn10kvoo5c0o19uq71_2535780__FJYz7KFb-?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Jordan 1 Retro High OG Light Fusion Red
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $183.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Level 100 Free Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cljq2hguh0t5goo5ct09kfdrg_7023070__UnaJtu9gM?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "1568px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm8037lri00gul70jdshr280s/cm8037lri00gul70jdshr280s_UE0IC-Sxg.png"
                            className="chakra-avatar__img css-3a5bz2"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#4B69FF
"
                        />
                        <img
                          alt="PackDraw Present"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Pack Duel Present
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $25.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Infinite Money Glitch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "1764px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm8037lri00gul70jdshr280s/cm8037lri00gul70jdshr280s_UE0IC-Sxg.png"
                            className="chakra-avatar__img css-3a5bz2"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#4B69FF
"
                        />
                        <img
                          alt="PackDraw Present"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clpw1xhj60002l517ycnbotwi_7136989__zeIMF4WA2?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Pack Duel Present
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $25.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Infinite Money Glitch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "1960px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm8037lri00gul70jdshr280s/cm8037lri00gul70jdshr280s_UE0IC-Sxg.png"
                            className="chakra-avatar__img css-3a5bz2"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="Gold Dust"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Gold Dust
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $50.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Infinite Money Glitch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "2156px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#0C8F8F" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-3 7) rotate(147 18 18) scale(1)"
                              fill="#EDF2F7"
                              rx={36}
                            />
                            <g transform="translate(-3 3.5) rotate(7 18 18)">
                              <path
                                d="M13,19 a1,0.75 0 0,0 10,0"
                                fill="#000000"
                              ></path>
                              <rect
                                x={12}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={22}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#E4AE33
"
                        />
                        <img
                          alt="Santa Hat"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm4ed6r4c000099p67gyp4m3a_3865747__6rYahoU3Z?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Santa Hat
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $8.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="LUCKY 30"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/community_packs/clxxlxct901phen1iu1xngkpo/packs/clxxlxct901phen1iu1xngkpo__WCztpYF7.png?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "2352px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm8037lri00gul70jdshr280s/cm8037lri00gul70jdshr280s_UE0IC-Sxg.png"
                            className="chakra-avatar__img css-3a5bz2"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="Gold Dust"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Gold Dust
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $50.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Infinite Money Glitch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "2548px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <mask
                            id="mask__beam"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={36}
                            height={36}
                          >
                            <rect
                              width={36}
                              height={36}
                              rx={72}
                              fill="#FFFFFF"
                            />
                          </mask>
                          <g mask="url(#mask__beam)">
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(8 8) rotate(334 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={6}
                            />
                            <g transform="translate(4 4) rotate(4 18 18)">
                              <path
                                d="M13,20 a1,0.75 0 0,0 10,0"
                                fill="#000000"
                              ></path>
                              <rect
                                x={10}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={24}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#E4AE33
"
                        />
                        <img
                          alt="Eevee (Poke Ball Pattern) - SV: Prismatic Evolutions (PRE)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm742tj7l0001jo0i3z8q9bbq_3295217__8rtnjMSsj?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Eevee (Poke Ball Pattern) - SV: Prismatic
                          Evolutions (PRE)
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $5.02
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="POKEMON 15% GOLDS"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/community_packs/clxwv7mye02p55kv7hab1a6mt/packs/clxwv7mye02p55kv7hab1a6mt_XxBUI8yHe.png?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "2744px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm77tpchv08pyi90fl3l6x3mo/cm77tpchv08pyi90fl3l6x3mo_s5XKCvb5z.png"
                            className="chakra-avatar__img css-3a5bz2"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="Gold Dust"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Gold Dust
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $50.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Infinite Money Glitch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-gray-700"
                data-component="LiveFeedElement"
                data-sentry-component="LiveFeedElement"
                data-sentry-source-file="LiveFeedElement.tsx"
                style={{
                  top: "2940px",
                  "-webkit-transition":
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  transition:
                    "top 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    "max-width": "100%",
                    width: "100%",
                    opacity: "1",
                    "-webkit-transform": "none",
                    "-ms-transform": "none",
                    transform: "none",
                  }}
                >
                  <div className="relative h-[180px]">
                    <div className="absolute top-4 right-4">
                      <div
                        data-sentry-element="Flex"
                        data-sentry-component="Avatar"
                        data-sentry-source-file="Avatar.tsx"
                        className="css-19i5vde"
                      >
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm77tpchv08pyi90fl3l6x3mo/cm77tpchv08pyi90fl3l6x3mo_s5XKCvb5z.png"
                            className="chakra-avatar__img css-3a5bz2"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
undefined
"
                      data-sentry-component="BaseProductCard"
                      data-sentry-source-file="BaseProductCard.tsx"
                    >
                      <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                      <div className="relative flex-1 flex w-full justify-center">
                        <div
                          className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#8847FF
"
                        />
                        <img
                          alt="Gold Dust"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm5n4opec0000mk0j5lo2c37w_2740726__AkeyoaXA7?tr=w-3840"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            "object-fit": "contain",
                            color: "transparent",
                            "z-index": "1",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                          Gold Dust
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $50.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-sentry-element="unknown"
                  data-sentry-source-file="LiveFeedElement.tsx"
                  style={{
                    position: "absolute",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                    opacity: "0",
                    "-webkit-transform":
                      "translateY(100px) translateZ(0px)",
                    "-ms-transform": "translateY(100px) translateZ(0px)",
                    transform: "translateY(100px) translateZ(0px)",
                  }}
                >
                  <div className="flex flex-col relative overflow-hidden justify-center items-center pt-[150px]">
                    <img
                      alt="Infinite Money Glitch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsScreen;
