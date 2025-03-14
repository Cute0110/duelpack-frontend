import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const EventScreen = () => {
  return (
    <div className="relative w-full mt-[50px]">
      <div className="flex flex-1 relative w-full container ms-auto me-auto ps-4 pe-4 self-stretch">
        <div className="flex flex-row items-stretch gap-8 w-full">
          <div className="flex flex-1 items-stretch gap-6" style={{}}>
            <div className="flex flex-col flex-1 items-stretch max-w-full pb-48">
              <div
                className="flex flex-col pt-8 w-full"
                data-sentry-component="PageContent"
                data-sentry-source-file="PageContent.tsx"
              >
                <div
                  dir="ltr"
                  data-orientation="horizontal"
                  className="w-full"
                  data-sentry-element="Tabs"
                  data-sentry-source-file="PageContent.tsx"
                >
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-gray-700 p-1 text-muted-foreground h-16"
                    data-sentry-element="TabsList"
                    data-sentry-source-file="PageContent.tsx"
                    tabIndex={0}
                    data-orientation="horizontal"
                    style={{ outline: "none" }}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:Rcvemoauikq:-content-raffle"
                      data-state="active"
                      id="radix-:Rcvemoauikq:-trigger-raffle"
                      className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-linear-tab data-[state=active]:shadow text-base text-white font-changa h-14"
                      data-sentry-element="TabsTrigger"
                      data-sentry-source-file="PageContent.tsx"
                      tabIndex={-1}
                      data-orientation="horizontal"
                      data-radix-collection-item
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-ticket mr-1 text-blue-300"
                        data-sentry-element="TicketIcon"
                        data-sentry-source-file="PageContent.tsx"
                      >
                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                        <path d="M13 5v2" />
                        <path d="M13 17v2" />
                        <path d="M13 11v2" />
                      </svg>
                      Raffle
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:Rcvemoauikq:-content-race"
                      data-state="inactive"
                      id="radix-:Rcvemoauikq:-trigger-race"
                      className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-linear-tab data-[state=active]:shadow text-base text-white font-changa h-14"
                      data-sentry-element="TabsTrigger"
                      data-sentry-source-file="PageContent.tsx"
                      tabIndex={-1}
                      data-orientation="horizontal"
                      data-radix-collection-item
                    >
                      <svg
                        viewBox="0 0 20 18"
                        focusable="false"
                        className="chakra-icon mr-1 mb-[4px] css-1gtmft1"
                        data-sentry-element="RaceIconNew"
                        data-sentry-source-file="PageContent.tsx"
                      >
                        <path
                          d="M3.33333 15C3.33333 15 4.16666 14.1667 6.66666 14.1667C9.16666 14.1667 10.8333 15.8333 13.3333 15.8333C15.8333 15.8333 16.6667 15 16.6667 15V4.99999C16.6667 4.99999 15.8333 5.83332 13.3333 5.83332C10.8333 5.83332 9.16666 4.16666 6.66666 4.16666C4.16666 4.16666 3.33333 4.99999 3.33333 4.99999V15Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 14.1667V5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.6667 15V5.83334"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.6667 9.99999C16.6667 9.99999 15.8333 10.8333 13.3333 10.8333C10.8333 10.8333 9.16666 9.16666 6.66666 9.16666C4.16666 9.16666 3.33333 9.99999 3.33333 9.99999"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Race
                    </button>
                  </div>
                  <div
                    data-state="active"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:Rcvemoauikq:-trigger-raffle"
                    id="radix-:Rcvemoauikq:-content-raffle"
                    tabIndex={0}
                    className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    data-sentry-element="TabsContent"
                    data-sentry-source-file="PageContent.tsx"
                    style={{}}
                  >
                    <div className="bg-gray-700 rounded-lg p-4 md:p-8 mb-4">
                      <div className="relative mb-4 px-8">
                        <div className="absolute top-0 left-2 sm:left-1 bg-contain bg-no-repeat bg-center bg-raffle-ticket h-full aspect-[32/170]"></div>
                        <div className="bg-gray-800 py-4 sm:py-5 gap-3 sm:gap-4">
                          <div className="relative z-10 flex flex-col items-center justify-center rounded-lg border-gray-600 border border-solid px-5 sm:px-9 py-4 sm:py-5 gap-3 sm:gap-4">
                            <div className="flex justify-center items-center gap-3 w-full font-changa text-white text-center md:px-16 mt-0.5">
                              <span className="hidden md:block flex-1 bg-gray-600 h-[1px]" />
                              <p className="md:flex-none flex flex-col sm:flex-row text-center text-base sm:text-[25px] lg:text-[32px] leading-none">
                                <span className="sm:mr-2 inline-block">
                                  Daily Raffle #4
                                </span>
                                <span>$5,000</span>
                              </p>
                              <span className="hidden md:block flex-1 bg-gray-600 h-[1px]" />
                            </div>
                            <p className="flex items-center bg-gray-800 font-semibold text-white text-sm md:text-base border border-solid border-gray-600 rounded-lg h-9 md:h-11 px-4">
                              Raffle Ends In 11H 25M 34S
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-0 right-2 sm:right-1 bg-contain bg-no-repeat bg-center bg-raffle-ticket h-full aspect-[32/170] -scale-100"></div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 border border-solid border-gray-600 items-center rounded-lg px-3 sm:px-4 py-3 mt-3 sm:mt-6 gap-4 sm:gap-0">
                        <div className="flex items-center">
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
                                  transform="translate(4 4) rotate(320 18 18) scale(1.2)"
                                  fill="#0C8F8F"
                                  rx={36}
                                />
                                <g transform="translate(0 2) rotate(0 18 18)">
                                  <path
                                    d="M13,21 a1,0.75 0 0,0 10,0"
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
                          <p className="text-white font-extrabold text-ellipsis max-w-30 overflow-hidden whitespace-nowrap ml-3">
                            animated_shark
                          </p>
                        </div>
                        <div className="justify-self-end sm:justify-self-center">
                          <div className="flex items-center">
                            <p className="flex font-semibold text-gray-400 p-0 pr-2 max-w-max gap-1.5">
                              Tickets{/* */}{" "}
                              <span className="text-white font-extrabold">
                                0
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 sm:justify-self-end">
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 h-10 px-6 rounded-lg w-full sm:w-auto">
                            Trophy case
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col bg-gray-700 rounded-lg p-4 pt-6 md:p-8 mb-8 md:mb-10">
                      <div className="flex flex-col md:flex-row mb-4 md:mb-6 xl:mb-8 gap-2 md:gap-8">
                        <p className="text-white font-semibold text-lg md:text-[22px] md:w-1/3 flex-none leading-none">
                          About the Daily Raffle
                        </p>
                        <p className="text-gray-400 text-sm md:text-base font-semibold leading-5">
                          Spend just $1 or more for a shot at huge
                          rewards! Every day, 20 lucky winners are
                          randomly selected. If you win, simply click
                          ‘Claim’ to collect your prize. Don’t miss
                          out—open some packs now and see if today is your
                          lucky day!
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 bg-gray-800 rounded-lg relative flex justify-end overflow-hidden items-center min-h-[90px] xl:min-h-[115px] py-4 xl:py-7 px-3">
                          <div className="bg-cover bg-no-repeat bg-about-raffle-1 absolute h-full w-full top-0 bg-left -left-[50px]"></div>
                          <p className="text-base xl:text-xl font-semibold text-white w-2/3 sm:w-3/5 lg:w-3/5 text-balance leading-tight h-auto relative z-10">
                            Win Daily — Play, Enter, and Get Rewarded!
                          </p>
                        </div>
                        <div className="flex-1 bg-gray-800 rounded-lg relative flex justify-end overflow-hidden pl-2 items-center min-h-[90px] xl:min-h-[115px]">
                          <div className="absolute bg-contain bg-no-repeat bg-left bg-about-raffle-2 -left-[20px] xs:left-[20px] md:-left-[35px] lg:left-0 h-full w-2/3 lg:w-2/5"></div>
                          <p className="text-base xl:text-xl font-semibold text-white text-balance leading-tight h-auto py-4 xl:py-7 pr-5 w-2/3 sm:w-3/5 lg:w-3/5 relative z-10">
                            Time's Running Out! Enter Now Before Today's
                            Raffle Closes!
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-white font-semibold text-lg md:text-[22px] mb-4">
                      Daily Raffle #3 Results
                    </p>
                    <div className="relative w-full overflow-auto bg-gray-700 rounded-lg pb-2">
                      <table className="w-full caption-bottom text-sm md:text-base">
                        <thead className="[&_tr]:border-b [&_tr]:border-gray-600">
                          <tr className>
                            <th className="h-14 px-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 pt-2 text-left align-middle text-sm md:text-base font-extrabold text-gray-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] w-[25px]">
                              #
                            </th>
                            <th className="h-14 px-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 pt-2 text-left align-middle text-sm md:text-base font-extrabold text-gray-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] w-1/2">
                              Name
                            </th>
                            <th className="h-14 px-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 pt-2 text-left align-middle text-sm md:text-base font-extrabold text-gray-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              Tickets
                            </th>
                            <th className="h-14 px-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 pt-2 align-middle text-sm md:text-base font-extrabold text-gray-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right">
                              Reward
                            </th>
                          </tr>
                        </thead>
                        <tbody className>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              1
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(6 2) rotate(312 18 18) scale(1)"
                                        fill="#EDF2F7"
                                        rx={6}
                                      />
                                      <g transform="translate(0 -3) rotate(2 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      sca*****bra
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              172530
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $2,000.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              2
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(-5 -5) rotate(209 18 18) scale(1.2)"
                                        fill="#FFAD08"
                                        rx={36}
                                      />
                                      <g transform="translate(-1 0) rotate(-9 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      b***i
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              2587
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $1,000.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              3
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(9 9) rotate(159 18 18) scale(1)"
                                        fill="#FFAD08"
                                        rx={6}
                                      />
                                      <g transform="translate(4.5 4.5) rotate(9 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      cod*********ays
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              61106
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $500.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              4
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(-3 7) rotate(347 18 18) scale(1.2)"
                                        fill="#EDF2F7"
                                        rx={36}
                                      />
                                      <g transform="translate(-3 3.5) rotate(-7 18 18)">
                                        <path
                                          d="M13,21 a1,0.75 0 0,0 10,0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      cyl***********use
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              262172
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $250.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              5
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(7 -3) rotate(177 18 18) scale(1)"
                                        fill="#EDF2F7"
                                        rx={6}
                                      />
                                      <g transform="translate(3.5 -6) rotate(7 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      bri****420
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              26302
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $200.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              6
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(6 6) rotate(196 18 18) scale(1.1)"
                                        fill="#EDD75A"
                                        rx={6}
                                      />
                                      <g transform="translate(4 6) rotate(6 18 18)">
                                        <path
                                          d="M13,20 a1,0.75 0 0,0 10,0"
                                          fill="#000000"
                                        />
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      pes********eer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              64018
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $150.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              7
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(5 5) rotate(35 18 18) scale(1.2)"
                                        fill="#0C8F8F"
                                        rx={6}
                                      />
                                      <g transform="translate(3 6) rotate(5 18 18)">
                                        <path
                                          d="M13,21 a1,0.75 0 0,0 10,0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      BOS*******OSE
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              39457
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $100.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              8
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(-1 -1) rotate(265 18 18) scale(1.1)"
                                        fill="#0C8F8F"
                                        rx={36}
                                      />
                                      <g transform="translate(-1 -6) rotate(5 18 18)">
                                        <path
                                          d="M15 20c2 1 4 1 6 0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      kin*************ard
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              35674
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $100.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              9
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(1 1) rotate(3 18 18) scale(1)"
                                        fill="#333333"
                                        rx={36}
                                      />
                                      <g transform="translate(-3 0) rotate(-3 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      mis**********mon
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              13985
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $75.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              10
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(4 4) rotate(200 18 18) scale(1.2)"
                                        fill="#0C8F8F"
                                        rx={36}
                                      />
                                      <g transform="translate(0 4) rotate(0 18 18)">
                                        <path
                                          d="M13,21 a1,0.75 0 0,0 10,0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      wor****ark
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              18223
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $75.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              11
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(6 -2) rotate(316 18 18) scale(1.1)"
                                        fill="#EDD75A"
                                        rx={6}
                                      />
                                      <g transform="translate(4 -2) rotate(6 18 18)">
                                        <path
                                          d="M15 20c2 1 4 1 6 0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      DI**DS
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              3233
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $75.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              12
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(2 6) rotate(322 18 18) scale(1.1)"
                                        fill="#EDF2F7"
                                        rx={36}
                                      />
                                      <g transform="translate(-2 3) rotate(2 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      bol********per
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              1922
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $75.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              13
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(5 5) rotate(35 18 18) scale(1.2)"
                                        fill="#0C8F8F"
                                        rx={6}
                                      />
                                      <g transform="translate(3 6) rotate(-5 18 18)">
                                        <path
                                          d="M13,21 a1,0.75 0 0,0 10,0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      Ja****th
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              18475
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              14
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(6 6) rotate(152 18 18) scale(1.2)"
                                        fill="#EDF2F7"
                                        rx={6}
                                      />
                                      <g transform="translate(0 0) rotate(-2 18 18)">
                                        <path
                                          d="M13,21 a1,0.75 0 0,0 10,0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      D***N
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              607
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              15
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(5 3) rotate(131 18 18) scale(1.2)"
                                        fill="#EDD75A"
                                        rx={6}
                                      />
                                      <g transform="translate(3 0) rotate(1 18 18)">
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      Get**************Guy
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              2906
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              16
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(8 8) rotate(58 18 18) scale(1.1)"
                                        fill="#333333"
                                        rx={6}
                                      />
                                      <g transform="translate(4 4) rotate(8 18 18)">
                                        <path
                                          d="M13,20 a1,0.75 0 0,0 10,0"
                                          fill="#FFFFFF"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      0**j
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              11202
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              17
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(5 5) rotate(51 18 18) scale(1)"
                                        fill="#EDD75A"
                                        rx={6}
                                      />
                                      <g transform="translate(3 1) rotate(-1 18 18)">
                                        <path
                                          d="M13,19 a1,0.75 0 0,0 10,0"
                                          fill="#000000"
                                        />
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      N*o
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              113301
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              18
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(4 4) rotate(120 18 18) scale(1)"
                                        fill="#0C8F8F"
                                        rx={36}
                                      />
                                      <g transform="translate(0 3) rotate(0 18 18)">
                                        <path
                                          d="M13,19 a1,0.75 0 0,0 10,0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      hyp****fun
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              62650
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              19
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(5 3) rotate(91 18 18) scale(1.1)"
                                        fill="#EDD75A"
                                        rx={6}
                                      />
                                      <g transform="translate(3 -6) rotate(1 18 18)">
                                        <path
                                          d="M15 20c2 1 4 1 6 0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      bi**ig
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              54096
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                          <tr className>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-gray-400 font-extrabold">
                              20
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                              <div className="flex gap-2 items-center">
                                <div
                                  data-sentry-element="Flex"
                                  data-sentry-component="Avatar"
                                  data-sentry-source-file="Avatar.tsx"
                                  className="css-m90ucp"
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
                                      />
                                      <rect
                                        x={0}
                                        y={0}
                                        width={36}
                                        height={36}
                                        transform="translate(5 3) rotate(111 18 18) scale(1)"
                                        fill="#EDD75A"
                                        rx={6}
                                      />
                                      <g transform="translate(7 -4) rotate(1 18 18)">
                                        <path
                                          d="M15 19c2 1 4 1 6 0"
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
                                <div className="relative flex w-full h-9 flex-1">
                                  <div className="absolute flex inset-0 items-center">
                                    <p className="text-white font-extrabold text-ellipsis overflow-hidden whitespace-nowrap">
                                      swo*****n13
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-white font-extrabold">
                              1202
                            </td>
                            <td className="p-2 first:pl-4 md:first:pl-6 last:pr-4 md:last:pr-6 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-green-300 font-extrabold">
                              $50.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    data-state="inactive"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:Rcvemoauikq:-trigger-race"
                    hidden
                    id="radix-:Rcvemoauikq:-content-race"
                    tabIndex={0}
                    className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    data-sentry-element="TabsContent"
                    data-sentry-source-file="PageContent.tsx"
                  ></div>
                </div>
                <div
                  data-component="TrophyDialog"
                  data-sentry-component="TrophyDialog"
                  data-sentry-source-file="TrophyDialog.tsx"
                />
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
  h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-#D32CE6
"
                        />
                        <img
                          alt="Vaporeon ex - 023/131 - SV: Prismatic Evolutions (PRE)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm6orpqgu0000l90j7gbcilsu_9304742__ICuS6Ry9P?tr=w-3840"
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
                          Vaporeon ex - 023/131 - SV: Prismatic Evolutions
                          (PRE)
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $6.00
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
                      alt="CHEAP 10% POKEMON"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/community_packs/cm7ce633w03qeld0f1q3iyi7o/packs/cm7ce633w03qeld0f1q3iyi7o_W-NX7QLz-.png?tr=w-3840"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScreen;
