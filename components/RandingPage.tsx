import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const RandingPage = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-1 relative w-full container py-4 ms-auto me-auto ps-4 pe-4 self-stretch">
        <div className="flex flex-row items-stretch gap-8 w-full">
          <div className="flex flex-1 items-stretch gap-6" style={{}}>
            <div className="flex flex-col flex-1 items-stretch max-w-full pb-48">
              <div
                className="flex flex-col w-full gap-12"
                data-sentry-component="PageContent"
                data-sentry-source-file="PageContent.tsx"
              >
                <div className="flex flex-col md:flex-row gap-4 w-full pt-8">
                  <div
                    data-component="BattleBanner"
                    className="rounded-lg flex-1 p-2 flex flex-col justify-between items-start h-[123px] min-h-[123px] overflow-hidden bg-gray-900 relative cursor-pointer"
                    data-sentry-component="BattleBanner"
                    data-sentry-source-file="BattleBanner.tsx"
                  >
                    <div className="bg-auto bg-no-repeat bg-right absolute h-full w-full top-0 left-0 bg-new-player-battle-banner"></div>
                    <div className="rounded bg-[#22272b] py-0.5 px-1.5 flex items-center gap-1">
                      <svg
                        viewBox="0 0 25 25"
                        focusable="false"
                        className="chakra-icon css-108u5q3 w-[10px]"
                        data-sentry-element="BattleIcon"
                        data-sentry-source-file="BattleBanner.tsx"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04798 4.77821C0.887314 4.61754 0.798011 4.39901 0.800175 4.1718L0.830497 0.988182C0.835516 0.461282 1.26142 0.0353727 1.78832 0.0303551L4.97194 3.84193e-05C5.19915 -0.00212522 5.41768 0.0871769 5.57835 0.247844L10.0071 4.67661L5.47675 9.20697L1.04798 4.77821ZM20.0141 0.0140547C19.7869 0.0118908 19.5683 0.101193 19.4077 0.261861L7.30719 12.3623L11.8376 16.8927L23.938 4.79223C24.0987 4.63156 24.188 4.41303 24.1858 4.18582L24.1555 1.0022C24.1505 0.475301 23.7246 0.049393 23.1977 0.0443749L20.0141 0.0140547ZM4.40089 12.8752C4.11764 12.592 3.6584 12.592 3.37515 12.8752L2.00749 14.2429C1.72424 14.5261 1.72424 14.9854 2.00749 15.2686L3.80254 17.0637C4.08579 17.3469 4.08579 17.8062 3.80254 18.0894L0.212439 21.6795C-0.0708128 21.9628 -0.0708128 22.422 0.212438 22.7053L1.49462 23.9874C1.77787 24.2707 2.23711 24.2707 2.52036 23.9874L6.11047 20.3973C6.39372 20.1141 6.85296 20.1141 7.13621 20.3973L8.93126 22.1924C9.21451 22.4756 9.67375 22.4756 9.957 22.1924L11.3247 20.8247C11.6079 20.5415 11.6079 20.0822 11.3247 19.799L4.40089 12.8752ZM13.6753 19.799C13.3921 20.0822 13.3921 20.5415 13.6753 20.8247L15.043 22.1924C15.3262 22.4756 15.7855 22.4756 16.0687 22.1924L17.8638 20.3973C18.147 20.1141 18.6063 20.1141 18.8895 20.3973L22.4796 23.9874C22.7629 24.2707 23.2221 24.2707 23.5054 23.9874L24.7876 22.7053C25.0708 22.422 25.0708 21.9628 24.7876 21.6795L21.1975 18.0894C20.9142 17.8062 20.9142 17.3469 21.1975 17.0637L22.9925 15.2686C23.2758 14.9854 23.2758 14.5261 22.9925 14.2429L21.6249 12.8752C21.3416 12.592 20.8824 12.592 20.5991 12.8752L13.6753 19.799Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="font-semibold text-sm text-blue-200">
                        Battle
                      </p>
                    </div>
                    <p className="text-white text-lg font-semibold w-1/2 leading-[1.1] flex flex-col z-10 text-balance">
                      Your Best Battle Win
                    </p>
                  </div>
                  <div
                    data-component="PacksBanner"
                    className="rounded-lg flex-1 p-2 flex flex-col justify-between items-start h-[123px] min-h-[123px] overflow-hidden bg-gray-900 relative cursor-pointer"
                    data-sentry-component="PacksBanner"
                    data-sentry-source-file="PacksBanner.tsx"
                  >
                    <div className="bg-auto bg-no-repeat bg-new-player-packs-banner bg-right absolute h-full w-full top-0 left-0"></div>
                    <div className="rounded bg-[#22272b] py-0.5 px-1.5 flex items-center gap-1">
                      <svg
                        viewBox="0 0 18 20"
                        focusable="false"
                        className="chakra-icon css-1wo03tw w-[10px]"
                        data-sentry-element="PacksIcon"
                        data-sentry-source-file="PacksBanner.tsx"
                      >
                        <path
                          d="M13.155 15.8964V2.37359C13.155 1.06143 12.0936 0 10.7814 0H2.37359C1.06143 0 0 1.06143 0 2.37359V15.8964C0 17.2085 1.06143 18.27 2.37359 18.27H10.7814C12.0936 18.27 13.155 17.2085 13.155 15.8964Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.5286 2.00584L13.9908 1.72168C14.0326 1.93062 14.0577 2.15628 14.0577 2.37358V15.8964C14.0577 17.7016 12.5867 19.1726 10.7814 19.1726H7.95654L12.1688 19.9582C13.4559 20.2006 14.6929 19.3481 14.9352 18.061L17.4175 4.76388C17.6598 3.4768 16.8074 2.23986 15.5203 1.99748L15.5286 2.00584Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="font-semibold text-sm text-purple-100">
                        Packs
                      </p>
                    </div>
                    <p className="text-white text-lg font-semibold w-1/2 leading-[1.1] flex flex-col z-10 text-balance">
                      Open Your First Pack!
                    </p>
                  </div>
                  <div
                    data-component="ForgeBanner"
                    className="rounded-lg flex-1 p-2 flex flex-col justify-between items-start h-[123px] min-h-[123px] overflow-hidden bg-gray-900 relative cursor-pointer"
                    data-sentry-component="ForgeBanner"
                    data-sentry-source-file="ForgeBanner.tsx"
                  >
                    <div className="bg-auto bg-no-repeat bg-new-player-forge-banner bg-right absolute h-full w-full top-0 left-0"></div>
                    <div className="rounded bg-[#22272b] py-0.5 px-1.5 flex items-center gap-1">
                      <svg
                        viewBox="0 0 17 17"
                        focusable="false"
                        className="chakra-icon css-1or15rx w-[10px]"
                        data-sentry-element="DealsIcon"
                        data-sentry-source-file="ForgeBanner.tsx"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.139902 6.52342C0.753718 3.27518 3.31401 0.71499 6.56231 0.101318V3.71519C5.25085 4.17317 4.21192 5.21202 3.75383 6.52342H0.139902ZM0.139893 9.53868C0.845962 13.2752 4.12775 16.1014 8.0696 16.1014C12.5267 16.1014 16.1399 12.4882 16.1399 8.03108C16.1399 4.08929 13.3139 0.807547 9.57738 0.10141V3.71536C11.3606 4.33832 12.6399 6.03531 12.6399 8.03108C12.6399 10.5552 10.5937 12.6014 8.0696 12.6014C6.07376 12.6014 4.37673 11.322 3.75382 9.53868H0.139893Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="font-semibold text-sm text-green-100">
                        Forge
                      </p>
                    </div>
                    <p className="text-white text-lg font-semibold w-1/2 leading-[1.1] flex flex-col z-10 text-balance">
                      Try Out The Forge!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-stretch gap-16 pb-20">
                  <div
                    className="flex flex-col items-stretch gap-4"
                    data-sentry-component="HomeSection"
                    data-sentry-source-file="HomeSection.tsx"
                  >
                    <div className="flex flex-row justify-between items-center gap-2">
                      <div className="flex flex-row items-center gap-2">
                        <div className="text-gray-400 size-6">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-sentry-element="svg"
                            data-sentry-component="PacksIconOutlined"
                            data-sentry-source-file="Icon.tsx"
                          >
                            <path
                              d="M4 4.15385L4 16.8462C4 17.4834 4.70355 18 5.57143 18L13.4286 18C14.2964 18 15 17.4834 15 16.8462L15 4.15385C15 3.5166 14.2964 3 13.4286 3L5.57143 3C4.70355 3 4 3.5166 4 4.15385Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M8.08771 19.0127C7.98916 19.5993 8.54002 20.1807 9.3181 20.3115L16.3622 21.495C17.1403 21.6257 17.8509 21.2562 17.9495 20.6697L19.9123 8.98725C20.0109 8.4007 19.46 7.81924 18.6819 7.68851L15.1599 7.09675"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          New Packs
                        </h3>
                      </div>
                      <div className="bg-[#22272b] hover:bg-gray-500 text-white rounded-md text-sm font-extrabold py-2 px-4">
                        View All Packs
                      </div>
                    </div>
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 self-stretch"
                      data-sentry-component="PacksPreview"
                      data-sentry-source-file="PacksPreview.tsx"
                    >
                      <div className="relative">
                        <div
                          data-sentry-element="Flex"
                          data-sentry-component="PackGridCard"
                          data-sentry-source-file="PackGridCard.tsx"
                          className="css-1qucnne"
                        >
                          <div
                            className="chakra-stack css-1clvjct"
                            data-sentry-element="HStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <button
                              type="button"
                              className="chakra-button css-m7zb9l"
                              aria-label="view details"
                              data-sentry-element="IconButton"
                              data-sentry-source-file="PackGridCard.tsx"
                            >
                              <svg
                                viewBox="0 0 21 16"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="chakra-stack css-1pdstc"
                            data-sentry-element="VStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <div
                              data-sentry-element="Box"
                              data-sentry-source-file="PackGridCard.tsx"
                              className="css-1hbttbe"
                            >
                              <a
                                className="chakra-link css-j7d8ot"
                                href="/cm7wg45q10000ky0h9qglbl50"
                              >
                                <img
                                  alt="pack"
                                  loading="lazy"
                                  width={200}
                                  height={304}
                                  decoding="async"
                                  data-nimg={1}
                                  srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7wg45q10000ky0h9qglbl50_6091358__1i697-q8R?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cm7wg45q10000ky0h9qglbl50_6091358__1i697-q8R?tr=w-640 2x"
                                  src="https://ik.imagekit.io/hr727kunx/packs/cm7wg45q10000ky0h9qglbl50_6091358__1i697-q8R?tr=w-640"
                                  style={{
                                    color: "white",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                />
                              </a>
                            </div>
                            <div className="css-1jzeywb">
                              <p className="chakra-text css-4rgycq">
                                $1,315.44
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          data-sentry-element="Flex"
                          data-sentry-component="PackGridCard"
                          data-sentry-source-file="PackGridCard.tsx"
                          className="css-1qucnne"
                        >
                          <div
                            className="chakra-stack css-1clvjct"
                            data-sentry-element="HStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <button
                              type="button"
                              className="chakra-button css-m7zb9l"
                              aria-label="view details"
                              data-sentry-element="IconButton"
                              data-sentry-source-file="PackGridCard.tsx"
                            >
                              <svg
                                viewBox="0 0 21 16"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="chakra-stack css-1pdstc"
                            data-sentry-element="VStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <div
                              data-sentry-element="Box"
                              data-sentry-source-file="PackGridCard.tsx"
                              className="css-1hbttbe"
                            >
                              <a
                                className="chakra-link css-j7d8ot"
                                href="/cm7vnzhvz0000lh0jquzfo979"
                              >
                                <img
                                  alt="pack"
                                  loading="lazy"
                                  width={200}
                                  height={304}
                                  decoding="async"
                                  data-nimg={1}
                                  srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640 2x"
                                  src="https://ik.imagekit.io/hr727kunx/packs/cm7vnju670000k40jh181utcv_5340262__4zeqDTVxo?tr=w-640"
                                  style={{
                                    color: "transparent",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                />
                              </a>
                            </div>
                            <div className="css-1jzeywb">
                              <p className="chakra-text css-4rgycq">
                                $24.00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          data-sentry-element="Flex"
                          data-sentry-component="PackGridCard"
                          data-sentry-source-file="PackGridCard.tsx"
                          className="css-1qucnne"
                        >
                          <div
                            className="chakra-stack css-1clvjct"
                            data-sentry-element="HStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <button
                              type="button"
                              className="chakra-button css-m7zb9l"
                              aria-label="view details"
                              data-sentry-element="IconButton"
                              data-sentry-source-file="PackGridCard.tsx"
                            >
                              <svg
                                viewBox="0 0 21 16"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="chakra-stack css-1pdstc"
                            data-sentry-element="VStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <div
                              data-sentry-element="Box"
                              data-sentry-source-file="PackGridCard.tsx"
                              className="css-1hbttbe"
                            >
                              <a
                                className="chakra-link css-j7d8ot"
                                href="/cm7u717c10007l50i6i4x31e8"
                              >
                                <img
                                  alt="pack"
                                  loading="lazy"
                                  width={200}
                                  height={304}
                                  decoding="async"
                                  data-nimg={1}
                                  srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-640 2x"
                                  src="https://ik.imagekit.io/hr727kunx/packs/cm7u54zh40001ib0kibo646qg_6777473__r3jANuhKI?tr=w-640"
                                  style={{
                                    color: "transparent",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                />
                              </a>
                            </div>
                            <div className="css-1jzeywb">
                              <p className="chakra-text css-4rgycq">
                                $0.91
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          data-sentry-element="Flex"
                          data-sentry-component="PackGridCard"
                          data-sentry-source-file="PackGridCard.tsx"
                          className="css-1qucnne"
                        >
                          <div
                            className="chakra-stack css-1clvjct"
                            data-sentry-element="HStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <button
                              type="button"
                              className="chakra-button css-m7zb9l"
                              aria-label="view details"
                              data-sentry-element="IconButton"
                              data-sentry-source-file="PackGridCard.tsx"
                            >
                              <svg
                                viewBox="0 0 21 16"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="chakra-stack css-1pdstc"
                            data-sentry-element="VStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <div
                              data-sentry-element="Box"
                              data-sentry-source-file="PackGridCard.tsx"
                              className="css-1hbttbe"
                            >
                              <a
                                className="chakra-link css-j7d8ot"
                                href="/cm7sq5g7x0000js0lygdzkfhy"
                              >
                                <img
                                  alt="pack"
                                  loading="lazy"
                                  width={200}
                                  height={304}
                                  decoding="async"
                                  data-nimg={1}
                                  srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7sq5g7x0000js0lygdzkfhy_8799889__C8ihldnU-?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cm7sq5g7x0000js0lygdzkfhy_8799889__C8ihldnU-?tr=w-640 2x"
                                  src="https://ik.imagekit.io/hr727kunx/packs/cm7sq5g7x0000js0lygdzkfhy_8799889__C8ihldnU-?tr=w-640"
                                  style={{
                                    color: "transparent",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                />
                              </a>
                            </div>
                            <div className="css-1jzeywb">
                              <p className="chakra-text css-4rgycq">
                                $893.85
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative md:hidden lg:flex">
                        <div
                          data-sentry-element="Flex"
                          data-sentry-component="PackGridCard"
                          data-sentry-source-file="PackGridCard.tsx"
                          className="css-1qucnne"
                        >
                          <div
                            className="chakra-stack css-1clvjct"
                            data-sentry-element="HStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <button
                              type="button"
                              className="chakra-button css-m7zb9l"
                              aria-label="view details"
                              data-sentry-element="IconButton"
                              data-sentry-source-file="PackGridCard.tsx"
                            >
                              <svg
                                viewBox="0 0 21 16"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="chakra-stack css-1pdstc"
                            data-sentry-element="VStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <div
                              data-sentry-element="Box"
                              data-sentry-source-file="PackGridCard.tsx"
                              className="css-1hbttbe"
                            >
                              <a
                                className="chakra-link css-j7d8ot"
                                href="/cm7sackgn000ml20g1f7g0wqr"
                              >
                                <img
                                  alt="pack"
                                  loading="lazy"
                                  width={200}
                                  height={304}
                                  decoding="async"
                                  data-nimg={1}
                                  srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7sackgn000ml20g1f7g0wqr_1177810__H_DDJ09zg?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cm7sackgn000ml20g1f7g0wqr_1177810__H_DDJ09zg?tr=w-640 2x"
                                  src="https://ik.imagekit.io/hr727kunx/packs/cm7sackgn000ml20g1f7g0wqr_1177810__H_DDJ09zg?tr=w-640"
                                  style={{
                                    color: "transparent",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                />
                              </a>
                            </div>
                            <div className="css-1jzeywb">
                              <p className="chakra-text css-4rgycq">
                                $269.04
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative md:hidden">
                        <div
                          data-sentry-element="Flex"
                          data-sentry-component="PackGridCard"
                          data-sentry-source-file="PackGridCard.tsx"
                          className="css-1qucnne"
                        >
                          <div
                            className="chakra-stack css-1clvjct"
                            data-sentry-element="HStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <button
                              type="button"
                              className="chakra-button css-m7zb9l"
                              aria-label="view details"
                              data-sentry-element="IconButton"
                              data-sentry-source-file="PackGridCard.tsx"
                            >
                              <svg
                                viewBox="0 0 21 16"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            className="chakra-stack css-1pdstc"
                            data-sentry-element="VStack"
                            data-sentry-source-file="PackGridCard.tsx"
                          >
                            <div
                              data-sentry-element="Box"
                              data-sentry-source-file="PackGridCard.tsx"
                              className="css-1hbttbe"
                            >
                              <a
                                className="chakra-link css-j7d8ot"
                                href="/cm7dvc25o0000kw0k1s8shygz"
                              >
                                <img
                                  alt="pack"
                                  loading="lazy"
                                  width={200}
                                  height={304}
                                  decoding="async"
                                  data-nimg={1}
                                  srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-256 1x, https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-640 2x"
                                  src="https://ik.imagekit.io/hr727kunx/packs/cm7dvc25o0000kw0k1s8shygz_1189867__9jMsvohWL?tr=w-640"
                                  style={{
                                    color: "transparent",
                                    height: "auto",
                                    width: "100%",
                                  }}
                                />
                              </a>
                            </div>
                            <div className="css-1jzeywb">
                              <p className="chakra-text css-4rgycq">
                                $1.77
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-stretch gap-4"
                    data-sentry-component="HomeSection"
                    data-sentry-source-file="HomeSection.tsx"
                  >
                    <div className="flex flex-row justify-between items-center gap-2">
                      <div className="flex flex-row items-center gap-2">
                        <div className="text-gray-400 size-6">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-sentry-element="svg"
                            data-sentry-component="BattleIconOutlined"
                            data-sentry-source-file="Icon.tsx"
                          >
                            <path
                              d="M14.2222 16.8889L3.99998 6.66667V4H6.66665L16.8889 14.2222"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M12.8889 18.2222L18.2223 12.8889"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M15.5557 15.5555L19.1113 19.1111"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M18.2223 20L20 18.2222"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M14.2223 7.11112L17.3334 4H20V6.66667L16.8889 9.77779"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M5.77771 13.7777L9.33328 17.3333"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M7.55558 16.4445L4.88891 19.1112"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M3.99998 18.2222L5.77776 20"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          Battle Highlights
                        </h3>
                      </div>
                      <div className="bg-[#22272b] hover:bg-gray-500 text-white rounded-md text-sm font-extrabold py-2 px-4">
                        View All Battles
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch gap-4">
                      <a href="/battles/cm7z7lvd500l1la0jgx1qxof2">
                        <div
                          className="flex relative flex-col sm:flex-row items-center p-4 bg-[#22272b] hover:bg-gray-650 rounded-lg cursor-pointer"
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
                                    className="absolute z-10 flex justify-center items-end w-full pb-[100%] mb-[50%]"
                                    style={{
                                      bottom: "0px",
                                      "-webkit-transform-origin":
                                        "bottom center",
                                      "-ms-transform-origin":
                                        "bottom center",
                                      "transform-origin": "bottom center",
                                    }}
                                  >
                                    <img
                                      alt="Crown"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: "0",
                                        top: "0",
                                        right: "0",
                                        bottom: "0",
                                        "object-fit": "contain",
                                        color: "transparent",
                                      }}
                                      sizes="100vw"
                                      srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                      src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
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
                                        src="https://ik.imagekit.io/hr727kunx/profile_pictures/clkvgnmge0000jn185ab9ha41_9gKj1vGBG"
                                        className="chakra-avatar__img css-3a5bz2 rounded-full w-24"
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
                                        "bottom center",
                                      "-ms-transform-origin":
                                        "bottom center",
                                      "transform-origin": "bottom center",
                                    }}
                                  >
                                    <img
                                      alt="Crown"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: "0",
                                        top: "0",
                                        right: "0",
                                        bottom: "0",
                                        "object-fit": "contain",
                                        color: "transparent",
                                      }}
                                      sizes="100vw"
                                      srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                      src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
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
                                        src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot26.png"
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
                                        "bottom center",
                                      "-ms-transform-origin":
                                        "bottom center",
                                      "transform-origin": "bottom center",
                                    }}
                                  >
                                    <img
                                      alt="Crown"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: "0",
                                        top: "0",
                                        right: "0",
                                        bottom: "0",
                                        "object-fit": "contain",
                                        color: "transparent",
                                      }}
                                      sizes="100vw"
                                      srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                      src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
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
                                        src="https://ik.imagekit.io/hr727kunx/profile_pictures/cljq3kd6s0000jh08r21dwlu3_C_mKt75nO"
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
                                        src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot22.png"
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
                                        src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot32.png"
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
                                $20,399.33
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
                                    "-webkit-transform":
                                      "translateX(0px)",
                                    "-ms-transform": "translateX(0px)",
                                    transform: "translateX(0px)",
                                  }}
                                >
                                  <img
                                    alt="Addicted"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/packs/cm2numd2t00008vamhrpauiwf_7546178__oFY6r38_t?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm2numd2t00008vamhrpauiwf_7546178__oFY6r38_t?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/packs/cm2numd2t00008vamhrpauiwf_7546178__oFY6r38_t?tr=w-128"
                                  />
                                  <img
                                    alt="Lavish"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/packs/cm0hl27y7000b2goi21k3t0ab_1809245__MYsJAq0HI?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm0hl27y7000b2goi21k3t0ab_1809245__MYsJAq0HI?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/packs/cm0hl27y7000b2goi21k3t0ab_1809245__MYsJAq0HI?tr=w-128"
                                  />
                                  <img
                                    alt="Batman"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/packs/cm11oq75u0005ump5ur1jb3d2_4168142__Cx0F9Ppfp?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm11oq75u0005ump5ur1jb3d2_4168142__Cx0F9Ppfp?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/packs/cm11oq75u0005ump5ur1jb3d2_4168142__Cx0F9Ppfp?tr=w-128"
                                  />
                                  <img
                                    alt="Audemars Piguet"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/packs/cly6ldmqu00j8ylje3tomtha0_5849616__qcj13upJV?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cly6ldmqu00j8ylje3tomtha0_5849616__qcj13upJV?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/packs/cly6ldmqu00j8ylje3tomtha0_5849616__qcj13upJV?tr=w-128"
                                  />
                                  <img
                                    alt="Addicted"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/packs/cm2numd2t00008vamhrpauiwf_7546178__oFY6r38_t?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/packs/cm2numd2t00008vamhrpauiwf_7546178__oFY6r38_t?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/packs/cm2numd2t00008vamhrpauiwf_7546178__oFY6r38_t?tr=w-128"
                                  />
                                </div>
                              </div>
                              <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-[#22272b]">
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
                              unboxed: $435,516.00
                            </p>
                            <button
                              type="button"
                              className="chakra-button css-1s4od15 bg-[#ffffff14] px-4 py-2 rounded-md"
                              data-sentry-element="Button"
                              data-sentry-component="BattleItemControls"
                              data-sentry-source-file="BattleItemControls.tsx"
                            >
                              View Results
                            </button>
                          </div>
                        </div>
                      </a>
                      <a href="/battles/cm7zeu6st00edjv0p27s7lh6n">
                        <div
                          className="flex relative flex-col sm:flex-row items-center p-4 bg-[#22272b] hover:bg-gray-650 rounded-lg cursor-pointer"
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
                                      "bottom center",
                                    "-ms-transform-origin":
                                      "bottom center",
                                    "transform-origin": "bottom center",
                                  }}
                                >
                                  <img
                                    alt="Crown"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: "0",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      "object-fit": "contain",
                                      color: "transparent",
                                    }}
                                    sizes="100vw"
                                    srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                    src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
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
                                      src="https://ik.imagekit.io/hr727kunx/profile_pictures/cll96wdm5006ola17kr5u2xg9_Ti5EjaOY9w"
                                        className="chakra-avatar__img css-3a5bz2 rounded-full w-24"
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
                                      src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot30.png"
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
                                $497.13
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
                                    "-webkit-transform":
                                      "translateX(0px)",
                                    "-ms-transform": "translateX(0px)",
                                    transform: "translateX(0px)",
                                  }}
                                >
                                  <img
                                    alt="HYUS HENNY AMIRI V2"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clmiv88jc001zl316zmttle5h/packs/clmiv88jc001zl316zmttle5h_z_8qdiQRa.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clmiv88jc001zl316zmttle5h/packs/clmiv88jc001zl316zmttle5h_z_8qdiQRa.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clmiv88jc001zl316zmttle5h/packs/clmiv88jc001zl316zmttle5h_z_8qdiQRa.png?tr=w-128"
                                  />
                                  <img
                                    alt="HYUS HENNY AMIRI X2"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_ZVCO2ZDtK.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_ZVCO2ZDtK.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clr1axqxs006tl618avfq0amv/packs/clr1axqxs006tl618avfq0amv_ZVCO2ZDtK.png?tr=w-128"
                                  />
                                  <img
                                    alt="HYUS HENNY AMIRI V2"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clmiv88jc001zl316zmttle5h/packs/clmiv88jc001zl316zmttle5h_z_8qdiQRa.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clmiv88jc001zl316zmttle5h/packs/clmiv88jc001zl316zmttle5h_z_8qdiQRa.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clmiv88jc001zl316zmttle5h/packs/clmiv88jc001zl316zmttle5h_z_8qdiQRa.png?tr=w-128"
                                  />
                                </div>
                              </div>
                              <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-[#22272b]">
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
                              unboxed: $24,247.00
                            </p>
                            <button
                              type="button"
                              className="chakra-button css-1s4od15 bg-[#ffffff14] px-4 py-2 rounded-md"
                              data-sentry-element="Button"
                              data-sentry-component="BattleItemControls"
                              data-sentry-source-file="BattleItemControls.tsx"
                            >
                              View Results
                            </button>
                          </div>
                        </div>
                      </a>
                      <a href="/battles/cm7zf63rg00vijt0hux0i8jvz">
                        <div
                          className="flex relative flex-col sm:flex-row items-center p-4 bg-[#22272b] hover:bg-gray-650 rounded-lg cursor-pointer"
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
                                      "bottom center",
                                    "-ms-transform-origin":
                                      "bottom center",
                                    "transform-origin": "bottom center",
                                  }}
                                >
                                  <img
                                    alt="Crown"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: "0",
                                      top: "0",
                                      right: "0",
                                      bottom: "0",
                                      "object-fit": "contain",
                                      color: "transparent",
                                    }}
                                    sizes="100vw"
                                    srcSet="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=640&q=75 640w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=750&q=75 750w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=828&q=75 828w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1080&q=75 1080w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1200&q=75 1200w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=1920&q=75 1920w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=2048&q=75 2048w, /_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75 3840w"
                                    src="/_next/image?url=%2Ftheme%2Fdefault%2Fcrown.png&w=3840&q=75"
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
                                      src="https://ik.imagekit.io/hr727kunx/profile_pictures/cll96wdm5006ola17kr5u2xg9_Ti5EjaOY9w"
                                        className="chakra-avatar__img css-3a5bz2 rounded-full w-24"
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
                                      src="https://ik.imagekit.io/hr727kunx/profile_pictures/packbot8.png"
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
                                $1,035.44
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
                                    "-webkit-transform":
                                      "translateX(0px)",
                                    "-ms-transform": "translateX(0px)",
                                    transform: "translateX(0px)",
                                  }}
                                >
                                  <img
                                    alt="HYUS MADE THIS 20%"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128"
                                  />
                                  <img
                                    alt="HYUS MADE THIS 20%"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128"
                                  />
                                  <img
                                    alt="HYUS MADE THIS 20%"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128"
                                  />
                                  <img
                                    alt="HYUS MADE THIS 20%"
                                    loading="eager"
                                    width={63}
                                    height={96}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{
                                      color: "transparent",
                                      opacity: "0.32",
                                      cursor: "pointer",
                                    }}
                                    srcSet="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-64 1x, https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128 2x"
                                    src="https://ik.imagekit.io/hr727kunx/community_packs/clnktu2d40000l217cavlyg2k/packs/clnktu2d40000l217cavlyg2k_9Vu-anIdoo.png?tr=w-128"
                                  />
                                </div>
                              </div>
                              <div className="flex absolute justify-center items-center top-0 right-0 gap-1 py-1 px-1.5 m-1 min-w-12 rounded bg-[#22272b]">
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
                              unboxed: $20,752.00
                            </p>
                            <button
                              type="button"
                              className="chakra-button css-1s4od15 bg-[#ffffff14] px-4 py-2 rounded-md"
                              data-sentry-element="Button"
                              data-sentry-component="BattleItemControls"
                              data-sentry-source-file="BattleItemControls.tsx"
                            >
                              View Results
                            </button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-stretch gap-4"
                    data-sentry-component="HomeSection"
                    data-sentry-source-file="HomeSection.tsx"
                  >
                    <div className="flex flex-row justify-between items-center gap-2">
                      <div className="flex flex-row items-center gap-2">
                        <div className="text-gray-400 size-6">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-sentry-element="svg"
                            data-sentry-component="DealsIconOutlined"
                            data-sentry-source-file="Icon.tsx"
                          >
                            <path
                              d="M7.5 3.06729C4.23742 4.71411 2 8.09576 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.09576 19.7626 4.71411 16.5 3.06729"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M8.6822 7C7.06551 8.07492 6 9.91303 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 9.91303 16.9345 8.07492 15.3178 7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                            <path
                              d="M13.8534 2H13.2857H10.7143H10.1466C9.71002 2 9.48314 2.5203 9.78021 2.84023L11.6336 4.83619C11.8314 5.04922 12.1686 5.04922 12.3664 4.83619L14.2198 2.84023C14.5169 2.5203 14.29 2 13.8534 2Z"
                              fill="currentColor"
                              data-sentry-element="path"
                              data-sentry-source-file="Icon.tsx"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          Forge Highlights
                        </h3>
                      </div>
                      <div className="bg-[#22272b] hover:bg-gray-500 text-white rounded-md text-sm font-extrabold py-2 px-4">
                        View All Products
                      </div>
                    </div>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6 gap-5 h-40 sm:h-44 md:h-48 overflow-clip">
                      <div
                        className="relative h-40 sm:h-44 md:h-48"
                        data-component="ForgeHighlightProductCard"
                        data-sentry-component="ForgeHighlightProductCard"
                        data-sentry-source-file="ForgeHighlightProductCard.tsx"
                      >
                        <p className="absolute top-3 left-3 text-yellow-300 font-semibold text-sm">
                          2.70{/* */}x
                        </p>
                        <div className="absolute top-3 right-2">
                          <button
                            data-state="closed"
                            data-sentry-element="TooltipTrigger"
                            data-sentry-source-file="ForgeHighlightProductCard.tsx"
                          >
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
                                    transform="translate(5 -1) rotate(215 18 18) scale(1.2)"
                                    fill="#0C8F8F"
                                    rx={6}
                                  />
                                  <g transform="translate(7 -5) rotate(5 18 18)">
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
                          </button>
                        </div>
                        <div
                          data-component="BaseProductCard"
                          className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                          data-sentry-component="BaseProductCard"
                          data-sentry-source-file="BaseProductCard.tsx"
                        >
                          <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                          <div className="relative flex-1 flex w-full justify-center">
                            <div
                              className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                            />
                            <img
                              alt="1.95 Carat Diamond"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="pointer-events-none"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                "object-fit": "contain",
                                color: "transparent",
                                "z-index": "1",
                              }}
                              sizes="(min-width: 0px) 100px"
                              srcSet="https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-3840 3840w"
                              src="https://ik.imagekit.io/hr727kunx/products/cm5731k1q0000ml0jriu6mz8q_3412526___Y-z8UeQE?tr=w-3840"
                            />
                          </div>
                          <div className="w-full">
                            <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                              1.95 Carat Diamond
                            </p>
                            <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                              $40,000.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative h-40 sm:h-44 md:h-48"
                        data-component="ForgeHighlightProductCard"
                        data-sentry-component="ForgeHighlightProductCard"
                        data-sentry-source-file="ForgeHighlightProductCard.tsx"
                      >
                        <p className="absolute top-3 left-3 text-yellow-300 font-semibold text-sm">
                          6.44{/* */}x
                        </p>
                        <div className="absolute top-3 right-2">
                          <button
                            data-state="closed"
                            data-sentry-element="TooltipTrigger"
                            data-sentry-source-file="ForgeHighlightProductCard.tsx"
                          >
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
                                    transform="translate(-1 5) rotate(265 18 18) scale(1.1)"
                                    fill="#0C8F8F"
                                    rx={36}
                                  />
                                  <g transform="translate(-1 4) rotate(5 18 18)">
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
                          </button>
                        </div>
                        <div
                          data-component="BaseProductCard"
                          className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                          data-sentry-component="BaseProductCard"
                          data-sentry-source-file="BaseProductCard.tsx"
                        >
                          <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                          <div className="relative flex-1 flex w-full justify-center">
                            <div
                              className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                            />
                            <img
                              alt="2005 SP Authentic Redemption Set Aaron Rodgers ROOKIE PATCH AUTO /5 #252 BGS 8.5"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="pointer-events-none"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                "object-fit": "contain",
                                color: "transparent",
                                "z-index": "1",
                              }}
                              sizes="(min-width: 0px) 100px"
                              srcSet="https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-3840 3840w"
                              src="https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-3840"
                            />
                          </div>
                          <div className="w-full">
                            <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                              2005 SP Authentic Redemption Set Aaron
                              Rodgers ROOKIE PATCH AUTO /5 #252 BGS 8.5
                            </p>
                            <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                              $25,000.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative h-40 sm:h-44 md:h-48"
                        data-component="ForgeHighlightProductCard"
                        data-sentry-component="ForgeHighlightProductCard"
                        data-sentry-source-file="ForgeHighlightProductCard.tsx"
                      >
                        <p className="absolute top-3 left-3 text-yellow-300 font-semibold text-sm">
                          6.44{/* */}x
                        </p>
                        <div className="absolute top-3 right-2">
                          <button
                            data-state="closed"
                            data-sentry-element="TooltipTrigger"
                            data-sentry-source-file="ForgeHighlightProductCard.tsx"
                          >
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
                                    transform="translate(-1 5) rotate(265 18 18) scale(1.1)"
                                    fill="#0C8F8F"
                                    rx={36}
                                  />
                                  <g transform="translate(-1 4) rotate(5 18 18)">
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
                          </button>
                        </div>
                        <div
                          data-component="BaseProductCard"
                          className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                          data-sentry-component="BaseProductCard"
                          data-sentry-source-file="BaseProductCard.tsx"
                        >
                          <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                          <div className="relative flex-1 flex w-full justify-center">
                            <div
                              className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                            />
                            <img
                              alt="2005 SP Authentic Redemption Set Aaron Rodgers ROOKIE PATCH AUTO /5 #252 BGS 8.5"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="pointer-events-none"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                "object-fit": "contain",
                                color: "transparent",
                                "z-index": "1",
                              }}
                              sizes="(min-width: 0px) 100px"
                              srcSet="https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-3840 3840w"
                              src="https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-3840"
                            />
                          </div>
                          <div className="w-full">
                            <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                              2005 SP Authentic Redemption Set Aaron
                              Rodgers ROOKIE PATCH AUTO /5 #252 BGS 8.5
                            </p>
                            <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                              $25,000.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative h-40 sm:h-44 md:h-48"
                        data-component="ForgeHighlightProductCard"
                        data-sentry-component="ForgeHighlightProductCard"
                        data-sentry-source-file="ForgeHighlightProductCard.tsx"
                      >
                        <p className="absolute top-3 left-3 text-yellow-300 font-semibold text-sm">
                          30.91{/* */}x
                        </p>
                        <div className="absolute top-3 right-2">
                          <button
                            data-state="closed"
                            data-sentry-element="TooltipTrigger"
                            data-sentry-source-file="ForgeHighlightProductCard.tsx"
                          >
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
                                    transform="translate(-3 -3) rotate(87 18 18) scale(1)"
                                    fill="#EDF2F7"
                                    rx={36}
                                  />
                                  <g transform="translate(-7 -6) rotate(-7 18 18)">
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
                          </button>
                        </div>
                        <div
                          data-component="BaseProductCard"
                          className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                          data-sentry-component="BaseProductCard"
                          data-sentry-source-file="BaseProductCard.tsx"
                        >
                          <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                          <div className="relative flex-1 flex w-full justify-center">
                            <div
                              className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                            />
                            <img
                              alt="Pokemon Gym Challenge Booster Box FACTORY SEALED WotC Case Fresh Mint!"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="pointer-events-none"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                "object-fit": "contain",
                                color: "transparent",
                                "z-index": "1",
                              }}
                              sizes="(min-width: 0px) 100px"
                              srcSet="https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-3840 3840w"
                              src="https://ik.imagekit.io/hr727kunx/products/cm6ehruec0000l80jdhlsaad3_112326__8Egx-WLg0W?tr=w-3840"
                            />
                          </div>
                          <div className="w-full">
                            <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                              Pokemon Gym Challenge Booster Box FACTORY
                              SEALED WotC Case Fresh Mint!
                            </p>
                            <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                              $17,000.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative h-40 sm:h-44 md:h-48"
                        data-component="ForgeHighlightProductCard"
                        data-sentry-component="ForgeHighlightProductCard"
                        data-sentry-source-file="ForgeHighlightProductCard.tsx"
                      >
                        <p className="absolute top-3 left-3 text-yellow-300 font-semibold text-sm">
                          1.16{/* */}x
                        </p>
                        <div className="absolute top-3 right-2">
                          <button
                            data-state="closed"
                            data-sentry-element="TooltipTrigger"
                            data-sentry-source-file="ForgeHighlightProductCard.tsx"
                          >
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
                                    transform="translate(5 -1) rotate(215 18 18) scale(1.2)"
                                    fill="#0C8F8F"
                                    rx={6}
                                  />
                                  <g transform="translate(7 -5) rotate(5 18 18)">
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
                          </button>
                        </div>
                        <div
                          data-component="BaseProductCard"
                          className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                          data-sentry-component="BaseProductCard"
                          data-sentry-source-file="BaseProductCard.tsx"
                        >
                          <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                          <div className="relative flex-1 flex w-full justify-center">
                            <div
                              className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                            />
                            <img
                              alt="Pre-owned Hermès Birkin 35 Toile H and Fauve Barenia Palladium Hardware"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="pointer-events-none"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                "object-fit": "contain",
                                color: "transparent",
                                "z-index": "1",
                              }}
                              sizes="(min-width: 0px) 100px"
                              srcSet="https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-3840 3840w"
                              src="https://ik.imagekit.io/hr727kunx/products/cls3l1e6w007njq17easulgiw_9277996__jcqk2QCgsg?tr=w-3840"
                            />
                          </div>
                          <div className="w-full">
                            <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                              Pre-owned Hermès Birkin 35 Toile H and Fauve
                              Barenia Palladium Hardware
                            </p>
                            <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                              $20,350.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative h-40 sm:h-44 md:h-48"
                        data-component="ForgeHighlightProductCard"
                        data-sentry-component="ForgeHighlightProductCard"
                        data-sentry-source-file="ForgeHighlightProductCard.tsx"
                      >
                        <p className="absolute top-3 left-3 text-yellow-300 font-semibold text-sm">
                          6.44{/* */}x
                        </p>
                        <div className="absolute top-3 right-2">
                          <button
                            data-state="closed"
                            data-sentry-element="TooltipTrigger"
                            data-sentry-source-file="ForgeHighlightProductCard.tsx"
                          >
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
                                    transform="translate(-1 5) rotate(265 18 18) scale(1.1)"
                                    fill="#0C8F8F"
                                    rx={36}
                                  />
                                  <g transform="translate(-1 4) rotate(5 18 18)">
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
                          </button>
                        </div>
                        <div
                          data-component="BaseProductCard"
                          className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                          data-sentry-component="BaseProductCard"
                          data-sentry-source-file="BaseProductCard.tsx"
                        >
                          <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6"></p>
                          <div className="relative flex-1 flex w-full justify-center">
                            <div
                              className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                            />
                            <img
                              alt="2005 SP Authentic Redemption Set Aaron Rodgers ROOKIE PATCH AUTO /5 #252 BGS 8.5"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="pointer-events-none"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: "0",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                "object-fit": "contain",
                                color: "transparent",
                                "z-index": "1",
                              }}
                              sizes="(min-width: 0px) 100px"
                              srcSet="https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-3840 3840w"
                              src="https://ik.imagekit.io/hr727kunx/products/cm5inwz720002mq0j9btj7ple_179083__ZTpGhzO06?tr=w-3840"
                            />
                          </div>
                          <div className="w-full">
                            <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                              2005 SP Authentic Redemption Set Aaron
                              Rodgers ROOKIE PATCH AUTO /5 #252 BGS 8.5
                            </p>
                            <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                              $25,000.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch gap-4">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 22 20"
                        focusable="false"
                        className="chakra-icon css-1abiiqy w-6"
                        data-sentry-element="FAQIcon"
                        data-sentry-source-file="PageContent.tsx"
                      >
                        <g fill="currentColor">
                          <path d="M16.0145 5.60607C15.5332 5.60607 15.2497 5.88688 15.2497 6.48356V8.80896C15.2497 9.21262 15.3699 9.4671 15.602 9.59873V9.21262C15.602 8.92303 15.8082 8.80018 16.0145 8.80018C16.2207 8.80018 16.427 8.92303 16.427 9.21262V9.59873C16.6504 9.4671 16.7879 9.21262 16.7879 8.80896V6.48356C16.7879 5.88688 16.4957 5.60607 16.0145 5.60607Z"></path>
                          <path d="M9.92161 8.42284H11.1763L10.549 6.07112L9.92161 8.42284Z"></path>
                          <path d="M17.0586 0H4.94141C2.21671 0 0 2.26353 0 5.04577V9.87217C0 12.4315 1.8755 14.5518 4.29688 14.8752V19.3419C4.29688 19.6081 4.45388 19.8481 4.69477 19.9499C4.77447 19.9836 4.85826 20 4.94128 20C5.10898 20 5.27386 19.9331 5.39713 19.8072L10.1853 14.9179H17.0586C19.7833 14.9179 22 12.6544 22 9.87217V5.04577C22 2.26353 19.7833 0 17.0586 0ZM6.92231 7.08905C7.18012 7.08905 7.32622 7.34353 7.32622 7.62434C7.32622 7.86127 7.20586 8.14208 6.92231 8.14208H5.62469V10.4061C5.62469 10.6869 5.2895 10.8273 4.95438 10.8273C4.61918 10.8273 4.28407 10.6869 4.28407 10.4061V4.83385C4.28407 4.55304 4.57621 4.41264 4.86845 4.41264H7.85039C8.13398 4.41264 8.2543 4.71977 8.2543 5.00058C8.2543 5.32527 8.1082 5.60607 7.85039 5.60607H5.62465V7.08905H6.92231ZM12.1903 10.8273C11.9755 10.8273 11.8036 10.7571 11.7521 10.5728L11.4599 9.47588H9.64661L9.35447 10.5728C9.30286 10.7571 9.13099 10.8273 8.91614 10.8273C8.54661 10.8273 8.05677 10.5903 8.05677 10.2656C8.05677 10.2393 8.06541 10.2042 8.07396 10.1691L9.67235 4.8163C9.76693 4.50917 10.1536 4.35999 10.5489 4.35999C10.9442 4.35999 11.3309 4.50917 11.4255 4.8163L13.0324 10.1691C13.041 10.2042 13.0496 10.2393 13.0496 10.2656C13.0497 10.5903 12.5599 10.8273 12.1903 10.8273ZM18.1285 8.80896C18.1285 10.1428 17.4066 10.7307 16.4269 10.8536V11.3626C16.4269 11.6434 16.2207 11.7838 16.0144 11.7838C15.8082 11.7838 15.6019 11.6434 15.6019 11.3626V10.8536C14.6223 10.7307 13.909 10.1428 13.909 8.80896V6.48356C13.909 4.96544 14.8285 4.41264 16.0144 4.41264C17.2003 4.41264 18.1284 4.96548 18.1284 6.48356L18.1285 8.80896Z"></path>
                        </g>
                      </svg>
                      <h3 className="text-xl font-bold text-white">
                        How Pack Duel Works
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        data-component="HowItWorksCard"
                        className="border-gray-650 border-2 rounded-lg p-4 pt-10 relative flex flex-col items-center justify-center bg-gradient-radial-card"
                        data-sentry-component="HowItWorksCard"
                        data-sentry-source-file="HowItWorksCard.tsx"
                      >
                        <div className="flex items-center justify-center absolute h-8 w-8 top-4 left-4 border-twitter-200 rounded-full border-2 text-twitter-200 font-black">
                          1
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 h-full">
                          <img
                            alt="Open Packs"
                            loading="lazy"
                            width={120}
                            height={120}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            srcSet="https://packdraw.com/_next/image?url=%2Fimages%2FopenPacks.png&w=128&q=75 1x, https://packdraw.com/_next/image?url=%2Fimages%2FopenPacks.png&w=256&q=75 2x"
                            src="https://packdraw.com/_next/image?url=%2Fimages%2FopenPacks.png&w=256&q=75"
                          />
                          <div className="flex flex-col items-center gap-2">
                            <h3 className="text-xl font-bold text-white">
                              Open Packs
                            </h3>
                            <p className="text-base text-center text-white/30 leading-normal">
                              Find your perfect packs &amp; experience the
                              online excitement!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-component="HowItWorksCard"
                        className="border-gray-650 border-2 rounded-lg p-4 pt-10 relative flex flex-col items-center justify-center bg-gradient-radial-card"
                        data-sentry-component="HowItWorksCard"
                        data-sentry-source-file="HowItWorksCard.tsx"
                      >
                        <div className="flex items-center justify-center absolute h-8 w-8 top-4 left-4 border-twitter-200 rounded-full border-2 text-twitter-200 font-black">
                          2
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 h-full">
                          <img
                            alt="Win Items"
                            loading="lazy"
                            width={126}
                            height={136}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            srcSet="https://packdraw.com/_next/image?url=%2Fimages%2FwinItems.png&w=128&q=75 1x, https://packdraw.com/_next/image?url=%2Fimages%2FwinItems.png&w=256&q=75 2x"
                            src="https://packdraw.com/_next/image?url=%2Fimages%2FwinItems.png&w=256&q=75"
                          />
                          <div className="flex flex-col items-center gap-2">
                            <h3 className="text-xl font-bold text-white">
                              Win Items
                            </h3>
                            <p className="text-base text-center text-white/30 leading-normal">
                              Uncover one item per pack from top brands
                              you know &amp; love!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        data-component="HowItWorksCard"
                        className="border-gray-650 border-2 rounded-lg p-4 pt-10 relative flex flex-col items-center justify-center bg-gradient-radial-card"
                        data-sentry-component="HowItWorksCard"
                        data-sentry-source-file="HowItWorksCard.tsx"
                      >
                        <div className="flex items-center justify-center absolute h-8 w-8 top-4 left-4 border-twitter-200 rounded-full border-2 text-twitter-200 font-black">
                          3
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 h-full">
                          <img
                            alt="Cash or Claim"
                            loading="lazy"
                            width={178}
                            height={124}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            srcSet="https://packdraw.com/_next/image?url=%2Fimages%2FcashOrClaim.png&w=256&q=75 1x, https://packdraw.com/_next/image?url=%2Fimages%2FcashOrClaim.png&w=384&q=75 2x"
                            src="https://packdraw.com/_next/image?url=%2Fimages%2FcashOrClaim.png&w=384&q=75"
                          />
                          <div className="flex flex-col items-center gap-2">
                            <h3 className="text-xl font-bold text-white">
                              Cash or Claim
                            </h3>
                            <p className="text-base text-center text-white/30 leading-normal">
                              Sell back unwanted items, cash them out, or
                              have them delivered!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-sentry-element="Accordion"
                      data-sentry-source-file="PageContent.tsx"
                      data-orientation="vertical"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="flex flex-col gap-4 flex-1">
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R15skumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R5skumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                What is Pack Duel?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R15skumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:R5skumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R19skumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R9skumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                Is Pack Duel safe and fair to use?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R19skumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:R9skumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R1dskumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rdskumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                Is Pack Duel trustworthy?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R1dskumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:Rdskumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R1hskumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Rhskumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                How do I open a pack?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R1hskumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:Rhskumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R16skumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:R6skumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                How do I deposit?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R16skumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:R6skumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R1askumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Raskumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                Missing crypto deposit?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R1askumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:Raskumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R1eskumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Reskumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                What are Battles?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R1eskumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:Reskumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
                          </div>
                          <div
                            data-state="closed"
                            data-orientation="vertical"
                            className="rounded-lg bg-[#22272b] px-4"
                          >
                            <h3
                              data-orientation="vertical"
                              data-state="closed"
                              className="flex"
                            >
                              <button
                                type="button"
                                aria-controls="radix-:R1iskumoauikq:"
                                aria-expanded="false"
                                data-state="closed"
                                data-orientation="vertical"
                                id="radix-:Riskumoauikq:"
                                className="flex flex-1 items-center justify-between py-4 transition-all text-left [&[data-state=open]>svg]:rotate-180 text-white font-extrabold text-base"
                                data-radix-collection-item
                              >
                                How do I get Support?
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
                                  className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </h3>
                            <div
                              data-state="closed"
                              id="radix-:R1iskumoauikq:"
                              hidden
                              role="region"
                              aria-labelledby="radix-:Riskumoauikq:"
                              data-orientation="vertical"
                              className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white"
                              style={{
                                "--radix-accordion-content-height":
                                  "var(--radix-collapsible-content-height)",
                                "--radix-accordion-content-width":
                                  "var(--radix-collapsible-content-width)",
                              }}
                            ></div>
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
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-[#22272b]"
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
                            <rect width={36} height={36} fill="#333333" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-1 -1) rotate(345 18 18) scale(1)"
                              fill="#0C8F8F"
                              rx={36}
                            />
                            <g transform="translate(-1 -2) rotate(5 18 18)">
                              <path
                                d="M15 19c2 1 4 1 6 0"
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
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
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
                          alt="Apple Gift Card"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cll8fv8a3000el516mktxvbfy_9104605__QOm58Pl0U?tr=w-3840"
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
                          Apple Gift Card
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
                      alt="Jackpot"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/63ed84b6f9ebc6f59362b251.png?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-[#22272b]"
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
                            <rect width={36} height={36} fill="#333333" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-1 -1) rotate(345 18 18) scale(1)"
                              fill="#0C8F8F"
                              rx={36}
                            />
                            <g transform="translate(-1 -2) rotate(5 18 18)">
                              <path
                                d="M15 19c2 1 4 1 6 0"
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
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
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
                          alt="Leafeon ex - 006/131 - SV: Prismatic Evolutions (PRE)"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="pointer-events-none"
                          sizes="(min-width: 0px) 100px"
                          srcSet="https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-3840 3840w"
                          src="https://ik.imagekit.io/hr727kunx/products/cm6lkqwht0000l70jvtbeeloy_6194815__RGUMAyY3p?tr=w-3840"
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
                          Leafeon ex - 006/131 - SV: Prismatic Evolutions
                          (PRE)
                        </p>
                        <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                          $6.68
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
                      alt="Prismatic God Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-[#22272b]"
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
                            <rect width={36} height={36} fill="#333333" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-1 -1) rotate(345 18 18) scale(1)"
                              fill="#0C8F8F"
                              rx={36}
                            />
                            <g transform="translate(-1 -2) rotate(5 18 18)">
                              <path
                                d="M15 19c2 1 4 1 6 0"
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
                    </div>
                    <div
                      data-component="BaseProductCard"
                      className="group
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
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
                      alt="Prismatic God Pack"
                      data-sentry-element="ImageKit"
                      data-sentry-source-file="LiveFeedElement.tsx"
                      loading="lazy"
                      width={150}
                      height={300}
                      decoding="async"
                      data-nimg={1}
                      sizes="(min-width: 0px) 100px"
                      srcSet="https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-3840 3840w"
                      src="https://ik.imagekit.io/hr727kunx/packs/cm7av38i50000ju0jwwyscj2h_5295246__Vljx9JNz2?tr=w-3840"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-[#22272b]"
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
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
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
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-[#22272b]"
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
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
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
                className="flex absolute justify-center items-center overflow-hidden rounded-lg w-full p-2 h-[180px] min-h-[180px] cursor-pointer bg-[#22272b]"
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
                            <rect width={36} height={36} fill="#0C8F8F" />
                            <rect
                              x={0}
                              y={0}
                              width={36}
                              height={36}
                              transform="translate(-3 -3) rotate(87 18 18) scale(1)"
                              fill="#EDF2F7"
                              rx={36}
                            />
                            <g transform="translate(-7 -4) rotate(-7 18 18)">
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
bg-[#22272b] hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandingPage;
