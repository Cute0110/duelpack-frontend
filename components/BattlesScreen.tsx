import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const BattlesScreen = () => {
  return (
    <div className="relative w-full mt-[50px] bg-[#1d2125]">
      <div className="flex flex-1 relative w-full container ms-auto me-auto ps-4 pe-4 self-stretch">
        <div className="flex flex-row items-stretch gap-8 w-full">
          <div
            className="flex flex-1 items-stretch gap-6"
            style={{ width: "calc(100% - 15.75rem)" }}
          >
            <div className="flex flex-col flex-1 items-stretch max-w-full pb-48">
              <div
                className="self-stretch items-stretch flex flex-col pt-8 pb-20 gap-4"
                data-sentry-component="BattlesListSkeleton"
                data-sentry-source-file="BattlesListSkeleton.tsx"
              >
                <div className="flex items-center justify-between items-stretch gap-3">
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r33:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-auto min-w-52 border-none bg-gray-700 text-base text-white font-bold"
                    data-sentry-element="SelectTrigger"
                    data-sentry-source-file="BattlesListSkeleton.tsx"
                  >
                    <span
                      data-sentry-element="SelectValue"
                      data-sentry-source-file="BattlesListSkeleton.tsx"
                      style={{ "pointer-events": "none" }}
                    >
                      Price High to Low
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-blue-400 text-base text-white font-bold hover:bg-blue-500 disabled:text-blue-600 h-10 px-6"
                    data-sentry-element="Button"
                    data-sentry-source-file="BattlesListSkeleton.tsx"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 25 25"
                        focusable="false"
                        className="chakra-icon css-onkibi"
                        data-sentry-element="BattleIcon"
                        data-sentry-source-file="BattlesListSkeleton.tsx"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p>Create Battle</p>
                    </div>
                  </button>
                </div>
                <div className="flex flex-col items-stretch gap-4">
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/clnhgno950012l317xjvsz3hg_gKbXwkuSb"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot13.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot7.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot25.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/cljq3kd6s0000jh08r21dwlu3_2iNH2oYFp"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot23.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $6,001.61
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-375px)",
                              "-ms-transform": "translateX(-375px)",
                              transform: "translateX(-375px)",
                            }}
                          >
                            <img
                              alt="WGTV UNBOX AMIRI"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_DbeWHrw8H.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_DbeWHrw8H.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_DbeWHrw8H.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WGTV UNBOX MAX WYNN"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_2UGywGiCH.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_2UGywGiCH.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_2UGywGiCH.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WGTV UNBOX DAILY ST"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_lgmEjKHDs.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_lgmEjKHDs.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_lgmEjKHDs.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WGTV GOLDEN DREAM"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clktwgtiw000wkz15szwwmqfm/packs/clktwgtiw000wkz15szwwmqfm_gkeo0_EeT.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clktwgtiw000wkz15szwwmqfm/packs/clktwgtiw000wkz15szwwmqfm_gkeo0_EeT.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clktwgtiw000wkz15szwwmqfm/packs/clktwgtiw000wkz15szwwmqfm_gkeo0_EeT.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WGTV UNBOX DUE AF 5%"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_-dB8zIati.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_-dB8zIati.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_-dB8zIati.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WGTV UNBOX FERRARI "
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_Z1ZckkOFN.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_Z1ZckkOFN.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_Z1ZckkOFN.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WGTV UNBOX AMENO"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_JIQbiB-6k.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_JIQbiB-6k.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clnf71ju5001nmn17cqtkxihg/packs/clnf71ju5001nmn17cqtkxihg_JIQbiB-6k.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            7
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $14,113.12
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-transparent"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          NORMAL MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#0C8F8F"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(7 7) rotate(217 18 18) scale(1.1)"
                                    fill="#EDF2F7"
                                    rx={6}
                                  />
                                  <g transform="translate(3.5 3.5) rotate(-7 18 18)">
                                    <path
                                      d="M13,20 a1,0.75 0 0,0 10,0"
                                      fill="#000000"
                                    />
                                    <rect
                                      x={12}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                    <rect
                                      x={22}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot13.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot26.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot16.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot4.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot21.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $310.85
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-600px)",
                              "-ms-transform": "translateX(-600px)",
                              transform: "translateX(-600px)",
                            }}
                          >
                            <img
                              alt="Tory Burch"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clvydhlzy1p813pa42kbyaxsu_4168775__ZMpNYnCSB?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clvydhlzy1p813pa42kbyaxsu_4168775__ZMpNYnCSB?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clvydhlzy1p813pa42kbyaxsu_4168775__ZMpNYnCSB?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Epic"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clycgbudu01d17lp2b43ioiw8_9759446__8NJ6doikU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clycgbudu01d17lp2b43ioiw8_9759446__8NJ6doikU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clycgbudu01d17lp2b43ioiw8_9759446__8NJ6doikU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Trainer"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clt0qwsdu00h5jq16yie41msj_495063__Ixw5TUVA8?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clt0qwsdu00h5jq16yie41msj_495063__Ixw5TUVA8?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clt0qwsdu00h5jq16yie41msj_495063__Ixw5TUVA8?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Rusty"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrfnocq600hrla1692rbdrfn_2754872__0O6AQo4AA?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrfnocq600hrla1692rbdrfn_2754872__0O6AQo4AA?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrfnocq600hrla1692rbdrfn_2754872__0O6AQo4AA?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Budget DDK"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clpdhksqj0163lb1798q8e0ed_269885___c4YvAB1H?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clpdhksqj0163lb1798q8e0ed_269885___c4YvAB1H?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clpdhksqj0163lb1798q8e0ed_269885___c4YvAB1H?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Cataclysm"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clqyq4l4n0039jt178gv1z5jx_5317960__jKuGzisrz?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clqyq4l4n0039jt178gv1z5jx_5317960__jKuGzisrz?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clqyq4l4n0039jt178gv1z5jx_5317960__jKuGzisrz?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="THATS GONNA PAY"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clwioxzxx1ilcj09p3v2tx2tx_1724855__cnZrTeY3R?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clwioxzxx1ilcj09p3v2tx2tx_1724855__cnZrTeY3R?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clwioxzxx1ilcj09p3v2tx2tx_1724855__cnZrTeY3R?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Console Gamer"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2gfjo0q9yoo5c23ufw3ot_2397783__2mhGPFO2G?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2gfjo0q9yoo5c23ufw3ot_2397783__2mhGPFO2G?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cljq2gfjo0q9yoo5c23ufw3ot_2397783__2mhGPFO2G?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Alien"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clmkzdsas0000mi169ag0aa5e_767459__CeYL1lFOJ?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clmkzdsas0000mi169ag0aa5e_767459__CeYL1lFOJ?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clmkzdsas0000mi169ag0aa5e_767459__CeYL1lFOJ?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Retro Jordan"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clklv1e1o0000l10zr1apmqcy_1176546__ZtpwqfJ0k?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clklv1e1o0000l10zr1apmqcy_1176546__ZtpwqfJ0k?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clklv1e1o0000l10zr1apmqcy_1176546__ZtpwqfJ0k?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Black Friday"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clp0jt2va000elf17hz8g3771_9964891__JTcJzDfNb?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clp0jt2va000elf17hz8g3771_9964891__JTcJzDfNb?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clp0jt2va000elf17hz8g3771_9964891__JTcJzDfNb?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            11
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $1,578.10
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-blue-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          SHARE MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <svg
                              viewBox="0 0 36 36"
                              fill="none"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
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
                                ></rect>
                              </mask>
                              <g mask="url(#mask__beam)">
                                <rect
                                  width={36}
                                  height={36}
                                  fill="#EDF2F7"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(0 0) rotate(284 18 18) scale(1.2)"
                                  fill="#FFAD08"
                                  rx={36}
                                />
                                <g transform="translate(-4 -1) rotate(4 18 18)">
                                  <path
                                    d="M15 21c2 1 4 1 6 0"
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
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot30.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot27.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot35.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $39.30
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-75px)",
                              "-ms-transform": "translateX(-75px)",
                              transform: "translateX(-75px)",
                            }}
                          >
                            <img
                              alt="To The Moon"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="To The Moon"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="To The Moon"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm3e1vvy00000wg4iqp1bxu6i_4718253__2TpuNW29d?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            3
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $0.40
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#FFAD08"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(5 3) rotate(11 18 18) scale(1.2)"
                                    fill="#EDD75A"
                                    rx={6}
                                  />
                                  <g transform="translate(3 -2) rotate(-1 18 18)">
                                    <path
                                      d="M15 21c2 1 4 1 6 0"
                                      stroke="#000000"
                                      fill="none"
                                      strokeLinecap="round"
                                    />
                                    <rect
                                      x={13}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                    <rect
                                      x={21}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/cljq3kd6s0000jh08r21dwlu3_2iNH2oYFp"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot35.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot27.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot21.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot19.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $28.96
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-375px)",
                              "-ms-transform": "translateX(-375px)",
                              transform: "translateX(-375px)",
                            }}
                          >
                            <img
                              alt="EASY DUB"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm3zrq8bk007wk2353hs713qt/packs/cm3zrq8bk007wk2353hs713qt_5Q_b7davqM.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm3zrq8bk007wk2353hs713qt/packs/cm3zrq8bk007wk2353hs713qt_5Q_b7davqM.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm3zrq8bk007wk2353hs713qt/packs/cm3zrq8bk007wk2353hs713qt_5Q_b7davqM.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="LOW RISK HIGH PROFIT"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_OqOT-whxG.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_OqOT-whxG.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_OqOT-whxG.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WAGGER 1$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm30tb53s01t8mw1405f74qxh/packs/cm30tb53s01t8mw1405f74qxh_8vS8bn5PB.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm30tb53s01t8mw1405f74qxh/packs/cm30tb53s01t8mw1405f74qxh_8vS8bn5PB.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm30tb53s01t8mw1405f74qxh/packs/cm30tb53s01t8mw1405f74qxh_8vS8bn5PB.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER V3"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER V3"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER V3"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER V3"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clog2vmbv0000jx18u9swyits/packs/clog2vmbv0000jx18u9swyits_fWMJ2Cimh.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="WAGER 28% PROFIT"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm1ifyij4003c9ju9ata11z1p/packs/cm1ifyij4003c9ju9ata11z1p_rmExWAXDf.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm1ifyij4003c9ju9ata11z1p/packs/cm1ifyij4003c9ju9ata11z1p_rmExWAXDf.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm1ifyij4003c9ju9ata11z1p/packs/cm1ifyij4003c9ju9ata11z1p_rmExWAXDf.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="FROSTWAVE"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm3zhyxed00bz7le3nq722ncj/packs/cm3zhyxed00bz7le3nq722ncj_k7n0pgzLc.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm3zhyxed00bz7le3nq722ncj/packs/cm3zhyxed00bz7le3nq722ncj_k7n0pgzLc.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm3zhyxed00bz7le3nq722ncj/packs/cm3zhyxed00bz7le3nq722ncj_k7n0pgzLc.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER V2"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_YRqopkc2i.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_YRqopkc2i.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_YRqopkc2i.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER V2"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_YRqopkc2i.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_YRqopkc2i.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_YRqopkc2i.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="4% IS BETTER THAN 3%"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="4% IS BETTER THAN 3%"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="4% IS BETTER THAN 3%"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm12b86tj00aazzz2ba7nfijj/packs/cm12b86tj00aazzz2ba7nfijj_-ZaLCZ6L7.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="FRESH KICKS LOTTO"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="FRESH KICKS LOTTO"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="FRESH KICKS LOTTO"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm4i29x1i0001nwwbtv4julau/packs/cm4i29x1i0001nwwbtv4julau_PiwvB23cM.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="BLACKOUT BOOSTER "
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_JM6zeXXe9.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_JM6zeXXe9.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cloov8sva0000jq16ozs4swtq/packs/cloov8sva0000jq16ozs4swtq_JM6zeXXe9.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            18
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $40.66
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#0C8F8F"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(7 -3) rotate(217 18 18) scale(1.1)"
                                    fill="#EDF2F7"
                                    rx={6}
                                  />
                                  <g transform="translate(3.5 -3) rotate(-7 18 18)">
                                    <path
                                      d="M15 20c2 1 4 1 6 0"
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
                                    ></rect>
                                    <rect
                                      x={22}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot4.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot11.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot23.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $24.48
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-1275px)",
                              "-ms-transform": "translateX(-1275px)",
                              transform: "translateX(-1275px)",
                            }}
                          >
                            <img
                              alt="The Golden Draw "
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cll7liifk000el916zpri3sbn_7362164__LQPgnvKFm?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cll7liifk000el916zpri3sbn_7362164__LQPgnvKFm?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cll7liifk000el916zpri3sbn_7362164__LQPgnvKFm?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="1% Watch"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clv0fczkw004imdoq5vslu8wz_5339513__43NGQ8cYs?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clv0fczkw004imdoq5vslu8wz_5339513__43NGQ8cYs?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clv0fczkw004imdoq5vslu8wz_5339513__43NGQ8cYs?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Prismatic Evolutions"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Jordans"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Jordans"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Jordans"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Jordans"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Jordans"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="2024 Paris Olympics"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="2024 Paris Olympics"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="2024 Paris Olympics"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clz96sciq00105uuoeizj52wv_9634294__HHXC0F_gi?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="DJ"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="DJ"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Naughty or Nice"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clprw0i3q000kl21ehhifjhvb_8088402__tt7mF472m?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clprw0i3q000kl21ehhifjhvb_8088402__tt7mF472m?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clprw0i3q000kl21ehhifjhvb_8088402__tt7mF472m?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            19
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $11.05
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-transparent"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          NORMAL MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#EDD75A"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(8 -4) rotate(358 18 18) scale(1.1)"
                                    fill="#333333"
                                    rx={6}
                                  />
                                  <g transform="translate(4 -3) rotate(8 18 18)">
                                    <path
                                      d="M15 20c2 1 4 1 6 0"
                                      stroke="#FFFFFF"
                                      fill="none"
                                      strokeLinecap="round"
                                    />
                                    <rect
                                      x={11}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#FFFFFF"
                                    ></rect>
                                    <rect
                                      x={23}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#FFFFFF"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot31.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot21.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot35.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot16.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot25.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $17.17
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-300px)",
                              "-ms-transform": "translateX(-300px)",
                              transform: "translateX(-300px)",
                            }}
                          >
                            <img
                              alt="Dream BIG"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm6uam9w9000vla0i6lmasmza_132250__CM0CpgFPn?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm6uam9w9000vla0i6lmasmza_132250__CM0CpgFPn?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm6uam9w9000vla0i6lmasmza_132250__CM0CpgFPn?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Prismatic Evolutions"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Haunted"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Prismatic God Pack"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="1% Console"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clqvhp7q10004l318rhgvwtjr_838388__xhuVELNTJ?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clqvhp7q10004l318rhgvwtjr_838388__xhuVELNTJ?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clqvhp7q10004l318rhgvwtjr_838388__xhuVELNTJ?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="1% Watch"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clv0fczkw004imdoq5vslu8wz_5339513__43NGQ8cYs?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clv0fczkw004imdoq5vslu8wz_5339513__43NGQ8cYs?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clv0fczkw004imdoq5vslu8wz_5339513__43NGQ8cYs?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            6
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $19.63
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#0C8F8F"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(6 2) rotate(132 18 18) scale(1)"
                                    fill="#EDF2F7"
                                    rx={6}
                                  />
                                  <g transform="translate(4 -3) rotate(2 18 18)">
                                    <path
                                      d="M15 19c2 1 4 1 6 0"
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
                                    ></rect>
                                    <rect
                                      x={22}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot6.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot32.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot7.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $13.62
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-75px)",
                              "-ms-transform": "translateX(-75px)",
                              transform: "translateX(-75px)",
                            }}
                          >
                            <img
                              alt="Grass"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clt85xkt0013dju18o5emf7ue_7694897__IJBlkSIpR?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clt85xkt0013dju18o5emf7ue_7694897__IJBlkSIpR?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clt85xkt0013dju18o5emf7ue_7694897__IJBlkSIpR?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Party Time"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cljq2m7g917waoo5c12squ928_5594090__BPZmUV62y?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cljq2m7g917waoo5c12squ928_5594090__BPZmUV62y?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cljq2m7g917waoo5c12squ928_5594090__BPZmUV62y?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Disney Lorcana"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm5wp97so0000me0fh1icogfb_8941556__OOZMVk2YM?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm5wp97so0000me0fh1icogfb_8941556__OOZMVk2YM?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm5wp97so0000me0fh1icogfb_8941556__OOZMVk2YM?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            3
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $0.08
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-crown rotate-180 size-5 text-gray-400"
                          data-state="closed"
                        >
                          <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                          <path d="M5 21h14" />
                        </svg>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm7c5p6fh00zbjo0fb6h0r7ce/cm7c5p6fh00zbjo0fb6h0r7ce_h6IFn5xMf.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot33.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot34.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $13.23
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Charizard Hunt"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Balance Booster"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Balance Booster"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Prismatic Evolutions"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Prismatic Evolutions"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm7a4ivch0000ie0in752vhk5_5247970__6Ai7VfzqD?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            9
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $0.00
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/clnq8dbq8002il617jwcygeus/clnq8dbq8002il617jwcygeus_kRIHAQCUW.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot27.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot20.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot17.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot21.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot4.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $6.57
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-225px)",
                              "-ms-transform": "translateX(-225px)",
                              transform: "translateX(-225px)",
                            }}
                          >
                            <img
                              alt="Jordans"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="DJ"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clrlcij5b000eky17vr0r56r9_4567714__awh1vzpiW?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Balance Booster"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Balance Booster"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Juice It"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clky5g3vx0000le179oeiujli_7952848___AxMaw-qz?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clky5g3vx0000le179oeiujli_7952848___AxMaw-qz?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clky5g3vx0000le179oeiujli_7952848___AxMaw-qz?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $15.50
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-zap size-5 text-gray-400"
                          data-state="closed"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#333333"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(-1 -1) rotate(65 18 18) scale(1.2)"
                                    fill="#0C8F8F"
                                    rx={36}
                                  />
                                  <g transform="translate(-1 -2) rotate(5 18 18)">
                                    <path
                                      d="M15 21c2 1 4 1 6 0"
                                      stroke="#FFFFFF"
                                      fill="none"
                                      strokeLinecap="round"
                                    />
                                    <rect
                                      x={14}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#FFFFFF"
                                    ></rect>
                                    <rect
                                      x={20}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#FFFFFF"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot17.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot25.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot16.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/cljq3kd6s0000jh08r21dwlu3_4yNWGWpXR"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot24.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $5.32
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(-1050px)",
                              "-ms-transform": "translateX(-1050px)",
                              transform: "translateX(-1050px)",
                            }}
                          >
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="15 CENTS TO 3$"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/clvsoe6lq0epsik4nnxbv04fq/packs/clvsoe6lq0epsik4nnxbv04fq_xp-VvFhmR.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            38
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $19.11
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-transparent"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          NORMAL MODE
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-zap size-5 text-gray-400"
                          data-state="closed"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <svg
                              viewBox="0 0 36 36"
                              fill="none"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
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
                                ></rect>
                              </mask>
                              <g mask="url(#mask__beam)">
                                <rect
                                  width={36}
                                  height={36}
                                  fill="#0C8F8F"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(7 7) rotate(237 18 18) scale(1)"
                                  fill="#EDF2F7"
                                  rx={6}
                                />
                                <g transform="translate(3.5 3.5) rotate(-7 18 18)">
                                  <path
                                    d="M13,19 a1,0.75 0 0,0 10,0"
                                    fill="#000000"
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
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot21.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $0.38
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="TO HELL WITH REVIEW "
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "1",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        waiting for block...
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Battle
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-green-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          JACKPOT MODE
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-skull size-5 text-gray-400"
                          data-state="closed"
                        >
                          <path d="m12.5 17-.5-1-.5 1h1z" />
                          <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path>
                          <circle cx={15} cy={12} r={1} />
                          <circle cx={9} cy={12} r={1} />
                        </svg>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                              style={{
                                bottom: "0px",
                                "-webkit-transform-origin":
                                  "center bottom",
                                "-ms-transform-origin": "center bottom",
                                "transform-origin": "center bottom",
                                "-webkit-transform": "rotate(-12deg)",
                                "-ms-transform": "rotate(-12deg)",
                                transform: "rotate(-12deg)",
                              }}
                            >
                              <img
                                alt="Crown"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  "object-fit": "contain",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <svg
                                viewBox="0 0 36 36"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
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
                                  <rect
                                    width={36}
                                    height={36}
                                    fill="#EDF2F7"
                                  ></rect>
                                  <rect
                                    x={0}
                                    y={0}
                                    width={36}
                                    height={36}
                                    transform="translate(-5 9) rotate(69 18 18) scale(1)"
                                    fill="#FFAD08"
                                    rx={36}
                                  />
                                  <g transform="translate(-5 4.5) rotate(-9 18 18)">
                                    <path
                                      d="M13,19 a1,0.75 0 0,0 10,0"
                                      fill="#000000"
                                    />
                                    <rect
                                      x={10}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                    <rect
                                      x={24}
                                      y={14}
                                      width="1.5"
                                      height={2}
                                      rx={1}
                                      stroke="none"
                                      fill="#000000"
                                    ></rect>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                              style={{
                                bottom: "0px",
                                "-webkit-transform-origin":
                                  "center bottom",
                                "-ms-transform-origin": "center bottom",
                                "transform-origin": "center bottom",
                                "-webkit-transform": "rotate(-12deg)",
                                "-ms-transform": "rotate(-12deg)",
                                transform: "rotate(-12deg)",
                              }}
                            >
                              <img
                                alt="Crown"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  "object-fit": "contain",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot23.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                              style={{
                                bottom: "0px",
                                "-webkit-transform-origin":
                                  "center bottom",
                                "-ms-transform-origin": "center bottom",
                                "transform-origin": "center bottom",
                                "-webkit-transform": "rotate(-12deg)",
                                "-ms-transform": "rotate(-12deg)",
                                transform: "rotate(-12deg)",
                              }}
                            >
                              <img
                                alt="Crown"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  "object-fit": "contain",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot24.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="flex gap-2">
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot36.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot19.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            className="relative"
                            data-sentry-component="Player"
                            data-sentry-source-file="Player.tsx"
                          >
                            <div
                              data-sentry-element="Flex"
                              data-sentry-component="Avatar"
                              data-sentry-source-file="Avatar.tsx"
                              className="css-d0x1op"
                            >
                              <span
                                className="chakra-avatar css-1mt8r91"
                                data-loaded
                              >
                                <img
                                  src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot28.png"
                                  className="chakra-avatar__img css-3a5bz2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $4.96
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="Gamer Deals"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm2drjsjw0000hu0xht47rhny_592440__LFULRz76y?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm2drjsjw0000hu0xht47rhny_592440__LFULRz76y?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm2drjsjw0000hu0xht47rhny_592440__LFULRz76y?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Gamer Deals"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cm2drjsjw0000hu0xht47rhny_592440__LFULRz76y?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm2drjsjw0000hu0xht47rhny_592440__LFULRz76y?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cm2drjsjw0000hu0xht47rhny_592440__LFULRz76y?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Easy Profit"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clzggjjkd00lil8ffor0r8wjy_9947422__PhuXKbo5i?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clzggjjkd00lil8ffor0r8wjy_9947422__PhuXKbo5i?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clzggjjkd00lil8ffor0r8wjy_9947422__PhuXKbo5i?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            3
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $27.63
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Results
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-blue-100"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          SHARE MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(-12deg)",
                              "-ms-transform": "rotate(-12deg)",
                              transform: "rotate(-12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <svg
                              viewBox="0 0 36 36"
                              fill="none"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
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
                                ></rect>
                              </mask>
                              <g mask="url(#mask__beam)">
                                <rect
                                  width={36}
                                  height={36}
                                  fill="#333333"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(5 5) rotate(355 18 18) scale(1.1)"
                                  fill="#0C8F8F"
                                  rx={6}
                                />
                                <g transform="translate(3 6) rotate(-5 18 18)">
                                  <path
                                    d="M13,20 a1,0.75 0 0,0 10,0"
                                    fill="#FFFFFF"
                                  />
                                  <rect
                                    x={14}
                                    y={14}
                                    width="1.5"
                                    height={2}
                                    rx={1}
                                    stroke="none"
                                    fill="#FFFFFF"
                                  />
                                  <rect
                                    x={20}
                                    y={14}
                                    width="1.5"
                                    height={2}
                                    rx={1}
                                    stroke="none"
                                    fill="#FFFFFF"
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(-12deg)",
                              "-ms-transform": "rotate(-12deg)",
                              transform: "rotate(-12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot8.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(12deg)",
                              "-ms-transform": "rotate(12deg)",
                              transform: "rotate(12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot30.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(12deg)",
                              "-ms-transform": "rotate(12deg)",
                              transform: "rotate(12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot5.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(12deg)",
                              "-ms-transform": "rotate(12deg)",
                              transform: "rotate(12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot10.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 21 21"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            d="M9.1806 0.652964C9.50276 -0.217654 10.7342 -0.217655 11.0563 0.652963L13.2 6.44613C13.3013 6.71985 13.5171 6.93566 13.7908 7.03694L19.584 9.1806C20.4546 9.50276 20.4546 10.7342 19.584 11.0563L13.7908 13.2C13.5171 13.3013 13.3013 13.5171 13.2 13.7908L11.0563 19.584C10.7342 20.4546 9.50276 20.4546 9.1806 19.584L7.03694 13.7908C6.93566 13.5171 6.71985 13.3013 6.44613 13.2L0.652964 11.0563C-0.217654 10.7342 -0.217655 9.50276 0.652963 9.1806L6.44613 7.03694C6.71985 6.93566 6.93566 6.71985 7.03694 6.44613L9.1806 0.652964Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(12deg)",
                              "-ms-transform": "rotate(12deg)",
                              transform: "rotate(12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot17.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $0.54
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="Cheap Games"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/cll87fo0g0002jo161k8vskl5_3558284__39SurJNvM?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cll87fo0g0002jo161k8vskl5_3558284__39SurJNvM?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/cll87fo0g0002jo161k8vskl5_3558284__39SurJNvM?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="Money Crunch"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="20% PROFIT 2V2 DAILY"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm6rh9a8k01d2jr0jzrm4vnos/packs/cm6rh9a8k01d2jr0jzrm4vnos_xp01i5kb2.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm6rh9a8k01d2jr0jzrm4vnos/packs/cm6rh9a8k01d2jr0jzrm4vnos_xp01i5kb2.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm6rh9a8k01d2jr0jzrm4vnos/packs/cm6rh9a8k01d2jr0jzrm4vnos_xp01i5kb2.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              alt="20% PROFIT 2V2 DAILY"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm6rh9a8k01d2jr0jzrm4vnos/packs/cm6rh9a8k01d2jr0jzrm4vnos_xp01i5kb2.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cm6rh9a8k01d2jr0jzrm4vnos/packs/cm6rh9a8k01d2jr0jzrm4vnos_xp01i5kb2.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cm6rh9a8k01d2jr0jzrm4vnos/packs/cm6rh9a8k01d2jr0jzrm4vnos_xp01i5kb2.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            4
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $3.79
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Results
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-transparent"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          NORMAL MODE
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-zap size-5 text-gray-400"
                          data-state="closed"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(-12deg)",
                              "-ms-transform": "rotate(-12deg)",
                              transform: "rotate(-12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <svg
                              viewBox="0 0 36 36"
                              fill="none"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
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
                                ></rect>
                              </mask>
                              <g mask="url(#mask__beam)">
                                <rect
                                  width={36}
                                  height={36}
                                  fill="#0C8F8F"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(7 7) rotate(237 18 18) scale(1)"
                                  fill="#EDF2F7"
                                  rx={6}
                                />
                                <g transform="translate(3.5 3.5) rotate(-7 18 18)">
                                  <path
                                    d="M13,19 a1,0.75 0 0,0 10,0"
                                    fill="#000000"
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
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot33.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $0.38
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="TO HELL WITH REVIEW "
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $0.02
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Results
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-transparent"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          NORMAL MODE
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-zap size-5 text-gray-400"
                          data-state="closed"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(-12deg)",
                              "-ms-transform": "rotate(-12deg)",
                              transform: "rotate(-12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <svg
                              viewBox="0 0 36 36"
                              fill="none"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
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
                                ></rect>
                              </mask>
                              <g mask="url(#mask__beam)">
                                <rect
                                  width={36}
                                  height={36}
                                  fill="#0C8F8F"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(7 7) rotate(237 18 18) scale(1)"
                                  fill="#EDF2F7"
                                  rx={6}
                                />
                                <g transform="translate(3.5 3.5) rotate(-7 18 18)">
                                  <path
                                    d="M13,19 a1,0.75 0 0,0 10,0"
                                    fill="#000000"
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
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot32.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $0.38
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="TO HELL WITH REVIEW "
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/community_packs/cly5pp6gf00nj7w8x2su33agk/packs/cly5pp6gf00nj7w8x2su33agk_dEQxkmW05.png?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $0.02
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Results
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex relative flex-col sm:flex-row items-center p-4 bg-gray-700 hover:bg-gray-650 rounded-lg cursor-pointer"
                    data-sentry-component="BattleListItem"
                    data-sentry-source-file="BattleListItem.tsx"
                  >
                    <div className="absolute top-0 left-[35%] sm:left-0 h-1.5 sm:h-full w-[30%] sm:w-1.5 rounded-b-lg sm:rounded-r-none sm:rounded-l-lg bg-transparent"></div>
                    <div className="flex flex-col items-center gap-2 w-[21rem]">
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          NORMAL MODE
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        data-sentry-element="DividedList"
                        data-sentry-component="BattlePlayers"
                        data-sentry-source-file="BattlePlayers.tsx"
                      >
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm7gfkssa01ikjr0jmv117n5c/cm7gfkssa01ikjr0jmv117n5c_AWYmedWhB.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot26.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                            style={{
                              bottom: "0px",
                              "-webkit-transform-origin": "center bottom",
                              "-ms-transform-origin": "center bottom",
                              "transform-origin": "center bottom",
                              "-webkit-transform": "rotate(12deg)",
                              "-ms-transform": "rotate(12deg)",
                              transform: "rotate(12deg)",
                            }}
                          >
                            <img
                              alt="Crown"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                              src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                "object-fit": "contain",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot21.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/cljq3kd6s0000jh08r21dwlu3_4yNWGWpXR"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot22.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 25 25"
                          focusable="false"
                          className="chakra-icon css-q5o4m6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="relative"
                          data-sentry-component="Player"
                          data-sentry-source-file="Player.tsx"
                        >
                          <div
                            data-sentry-element="Flex"
                            data-sentry-component="Avatar"
                            data-sentry-source-file="Avatar.tsx"
                            className="css-d0x1op"
                          >
                            <span
                              className="chakra-avatar css-1mt8r91"
                              data-loaded
                            >
                              <img
                                src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot14.png"
                                className="chakra-avatar__img css-3a5bz2"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-gray-400 font-bold">
                          cost:{" "}
                        </p>
                        <p className="text-base text-white font-bold">
                          $0.11
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 min-w-0 self-stretch md:self-center">
                      <div className="flex relative w-full bg-black/40 rounded-lg">
                        <div
                          className="flex w-full overflow-x-hidden"
                          data-sentry-component="PacksProgressDisplay"
                          data-sentry-source-file="PacksProgressDisplay.tsx"
                        >
                          <div
                            className="flex transform transition-transform duration-200 ease-linear"
                            style={{
                              height: "108px",
                              padding: "6px",
                              gap: "12px",
                              "-webkit-transform": "translateX(0px)",
                              "-ms-transform": "translateX(0px)",
                              transform: "translateX(0px)",
                            }}
                          >
                            <img
                              alt="Money Crunch"
                              loading="eager"
                              width={63}
                              height={96}
                              decoding="async"
                              data-nimg={1}
                              srcSet="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128 2x"
                              src="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128"
                              style={{
                                color: "transparent",
                                opacity: "0.32",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-gray-700">
                          <svg
                            viewBox="0 0 45 45"
                            focusable="false"
                            className="chakra-icon css-16hlsqx"
                            data-sentry-element="Brand"
                            data-sentry-source-file="BattleListItem.tsx"
                          >
                            <path
                              d="M3.21192 7.42225C1.15968 8.23994 0.158879 10.5665 0.976565 12.6187L12.821 42.346C13.6387 44.3982 15.9652 45.399 18.0174 44.5813L34.739 37.9188C36.7913 37.1012 37.7921 34.7746 36.9744 32.7224L25.13 2.99512C24.3123 0.942884 21.9857 -0.0579184 19.9335 0.759768L3.21192 7.42225Z"
                              fill="currentColor"
                            />
                            <path
                              d="M35.8047 22.5693L35.7383 6.50156C35.7292 4.29244 33.931 2.50898 31.7219 2.5181L27.822 2.5342L35.8047 22.5693Z"
                              fill="currentColor"
                            />
                            <path
                              d="M38.0241 27.9748L44.3787 13.2168C45.2524 11.1878 44.3158 8.83469 42.2868 7.96101L38.7048 6.41865L38.0241 27.9748Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p className="text-sm text-white font-bold">
                            1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-[12rem]">
                      <p className="text-base text-gray-400 font-bold">
                        unboxed: $0.54
                      </p>
                      <button
                        type="button"
                        className="chakra-button css-1s4od15"
                        data-sentry-element="Button"
                        data-sentry-component="BattleItemControls"
                        data-sentry-source-file="BattleItemControls.tsx"
                      >
                        View Results
                      </button>
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
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm3e95b3100d4d7qm8b20zgja/cm3e95b3100d4d7qm8b20zgja_CwhIfJS1l.png"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#E4AE33
"
                        />
                        <img
                          alt="PlayStation Store Gift Card [Digital Code]"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cll7005ij000amn17i6nwnay2_5574179__ZAoYuNKvR?tr=w-3840"
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
                          PlayStation Store Gift Card [Digital Code]
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $100.00
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
                      alt="PACK OF ALL PACKS"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/community_packs/cm3e95b3100d4d7qm8b20zgja/packs/cm3e95b3100d4d7qm8b20zgja_3aE7AoIMR.png?tr=w-3840"
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
                            <rect width={36} height={36} fill="#EDD75A" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(7 1) rotate(33 18 18) scale(1)"
                              fill="#333333"
                              rx={6}
                            />
                            <g transform="translate(3.5 -3) rotate(3 18 18)">
                              <path
                                d="M15 19c2 1 4 1 6 0"
                                stroke="#FFFFFF"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={11}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
                              />
                              <rect
                                x={23}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#EB4B4B
"
                        />
                        <img
                          alt="Sandygast - 214/193 - SV02: Paldea Evolved (PAL)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm7dsnevi0002jp0p8nv31u21_5975072__2olGhFghH?tr=w-3840"
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
                          Sandygast - 214/193 - SV02: Paldea Evolved (PAL)
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $11.46
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
                      alt="Haunted"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-3840"
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
                            <rect width={36} height={36} fill="#EDD75A" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(7 1) rotate(33 18 18) scale(1)"
                              fill="#333333"
                              rx={6}
                            />
                            <g transform="translate(3.5 -3) rotate(3 18 18)">
                              <path
                                d="M15 19c2 1 4 1 6 0"
                                stroke="#FFFFFF"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={11}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
                              />
                              <rect
                                x={23}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
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
                          alt="Greavard - 214/198 - SV01: Scarlet & Violet Base Set (SV1)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm7du22p10002jo0fg7bkp44t_5620204__qSQxeu5oD?tr=w-3840"
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
                          Greavard - 214/198 - SV01: Scarlet &amp; Violet
                          Base Set (SV1)
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $23.51
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
                      alt="Haunted"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-3840"
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
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-5 9) rotate(49 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 4.5) rotate(9 18 18)">
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
                          alt="iPhone Fast Charger"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2m0bb17gboo5canz7ip5y_1725064__3UHGNR4-d?tr=w-3840"
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
                          iPhone Fast Charger
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $12.00
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
                      alt="Money Crunch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-3840"
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
                            <rect width={36} height={36} fill="#EDF2F7" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(0 8) rotate(64 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(0 4) rotate(4 18 18)">
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#D32CE6
"
                        />
                        <img
                          alt="Steam Gift Card"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-3840"
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
                          $5.00
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
                      alt="Balance Booster"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-3840"
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
                              transform="translate(0 8) rotate(64 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(0 4) rotate(4 18 18)">
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#D32CE6
"
                        />
                        <img
                          alt="Steam Gift Card"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clkxf0g7s000ajw17k3gm47f5_4113789__zOoWsuNXw?tr=w-3840"
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
                          $5.00
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
                      alt="Balance Booster"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clky4mfcq0000mm17gprwuy5y_1150111__6IaOqrE3m?tr=w-3840"
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
                            <rect width={36} height={36} fill="#EDD75A" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(7 1) rotate(13 18 18) scale(1.1)"
                              fill="#333333"
                              rx={6}
                            />
                            <g transform="translate(3.5 -5) rotate(3 18 18)">
                              <path
                                d="M15 20c2 1 4 1 6 0"
                                stroke="#FFFFFF"
                                fill="none"
                                strokeLinecap="round"
                              />
                              <rect
                                x={11}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
                              />
                              <rect
                                x={23}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
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
                          alt="Mini Stuffed Penguin "
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clpegpkkk00a2l318znzkw8lw_9527128__egaKP611P?tr=w-3840"
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
                          Mini Stuffed Penguin{" "}
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $12.00
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
                      alt="MASRI1@"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/community_packs/cm4xc9bk800khmg0j61dwfnni/packs/cm4xc9bk800khmg0j61dwfnni_8CTM5jx50.png?tr=w-3840"
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
                              transform="translate(-5 9) rotate(49 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 4.5) rotate(9 18 18)">
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
                          alt="Keycap Puller"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2h1rz0s2too5cde1pr1vn_58363__YR6IA6m1S?tr=w-3840"
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
                          Keycap Puller
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $6.50
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
                      alt="Money Crunch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-3840"
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
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm6knrwil0073jr0fe6zqvuk8/cm6knrwil0073jr0fe6zqvuk8_20-gnF2Pt.png"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#E4AE33
"
                        />
                        <img
                          alt="Starbucks eGift Card"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-3840"
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
                          Starbucks eGift Card
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $15.00
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
                      alt="Jordans"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-3840"
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
                              transform="translate(-5 9) rotate(49 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 4.5) rotate(9 18 18)">
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
                          alt="Apple Gift Cards"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cllmz1x780000mg16331k0zsj_7709914__Xy_XQHRdD?tr=w-3840"
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
                          Apple Gift Cards
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $250.00
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
                      alt="Money Crunch"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clln0nd39000gmg166217qvbj_2724762__VnBggDcQw?tr=w-3840"
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
                              transform="translate(-5 9) rotate(49 18 18) scale(1.1)"
                              fill="#FFAD08"
                              rx={36}
                            />
                            <g transform="translate(-1 4.5) rotate(9 18 18)">
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
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm6q3y5nh0078ju0gco3qv9up/cm6q3y5nh0078ju0gco3qv9up_R9n2Kv1B67.png"
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
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm6q3y5nh0078ju0gco3qv9up/cm6q3y5nh0078ju0gco3qv9up_R9n2Kv1B67.png"
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
                        <span
                          className="chakra-avatar css-f89lva"
                          data-loaded
                        >
                          <img
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cm6q3y5nh0078ju0gco3qv9up/cm6q3y5nh0078ju0gco3qv9up_R9n2Kv1B67.png"
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
                              transform="translate(6 2) rotate(312 18 18) scale(1)"
                              fill="#EDF2F7"
                              rx={6}
                            />
                            <g transform="translate(0 -4) rotate(2 18 18)">
                              <path
                                d="M15 19c2 1 4 1 6 0"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#E4AE33
"
                        />
                        <img
                          alt="3 Pair Flat Shoe laces"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clkuf74w4000gk216debu2rr2_4086405__BcgjZ-gqM?tr=w-3840"
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
                          3 Pair Flat Shoe laces
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
                      alt="Jordans"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-3840"
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
                            <rect width={36} height={36} fill="#FFAD08" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(5 5) rotate(91 18 18) scale(1.1)"
                              fill="#EDD75A"
                              rx={6}
                            />
                            <g transform="translate(3 0) rotate(-1 18 18)">
                              <path
                                d="M13,20 a1,0.75 0 0,0 10,0"
                                fill="#000000"
                              ></path>
                              <rect
                                x={13}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#000000"
                              />
                              <rect
                                x={21}
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
                          alt="Starbucks eGift Card"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/clot1cjhx0000l316xpi9jy1a_606799__GgZSmrSFa?tr=w-3840"
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
                          Starbucks eGift Card
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $15.00
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
                      alt="Jordans"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clrimogm5002ql81805ibbbv8_7267541___CERAqKuU?tr=w-3840"
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
                  top: "3136px",
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
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cluryfvm0001jie13lg5rkgim_Qbi51bPSV"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#D32CE6
"
                        />
                        <img
                          alt="Gaming Keyboard RGB Wired"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2h1s80s6goo5cbws31tnx_6172412__veoTOwoTa?tr=w-3840"
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
                          Gaming Keyboard RGB Wired
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $35.00
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
                  top: "3332px",
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
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cluryfvm0001jie13lg5rkgim_Qbi51bPSV"
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
                  top: "3528px",
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
                            src="https://ik.imagekit.io/hr727kunx/profile_pictures/cluryfvm0001jie13lg5rkgim_Qbi51bPSV"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#829dbb
"
                        />
                        <img
                          alt="Supreme Nike Lightweight Crew Socks Red"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/63dc4d8b1cc10cd4216effb5.png?tr=w-3840"
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
                          Supreme Nike Lightweight Crew Socks Red
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $66.00
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
                  top: "3724px",
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
                            <rect width={36} height={36} fill="#EDD75A" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(8 8) rotate(318 18 18) scale(1)"
                              fill="#333333"
                              rx={6}
                            />
                            <g transform="translate(4 4) rotate(8 18 18)">
                              <path
                                d="M13,19 a1,0.75 0 0,0 10,0"
                                fill="#FFFFFF"
                              ></path>
                              <rect
                                x={11}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
                              />
                              <rect
                                x={23}
                                y={14}
                                width="1.5"
                                height={2}
                                rx={1}
                                stroke="none"
                                fill="#FFFFFF"
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
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#EB4B4B
"
                        />
                        <img
                          alt="Duracell AA Batteries"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cljq2m7ga17wfoo5chbh7aofo_2370977__wA-YShLDw?tr=w-3840"
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
                          Duracell AA Batteries
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $5.00
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
                      alt="Ride"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/clrqowgaf00delb18p5vdznir_982146__VLLXMFo5f?tr=w-3840"
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

export default BattlesScreen;
