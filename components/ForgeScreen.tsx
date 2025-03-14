import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const ForgeScreen = () => {
  return (          
  <div
    className="flex flex-col flex-1 items-stretch relative container mt-[50px] bg-[#1d2125]"
    data-sentry-component="LiveFeedSwitcher"
    data-sentry-source-file="LiveFeedSwitcher.tsx"
  >
    <style
      data-emotion="css 1b23abr"
      dangerouslySetInnerHTML={{
        __html:
          "\n                        .css-1b23abr {\n                            width: 100%;\n                            -webkit-margin-start: auto;\n                            margin-inline-start:auto;-webkit-margin-end: auto;\n                            margin-inline-end:auto;-webkit-padding-start: var(--chakra-space-4);\n                            padding-inline-start:var(--chakra-space-4);-webkit-padding-end: var(--chakra-space-4);\n                            padding-inline-end:var(--chakra-space-4);max-width: var(--chakra-sizes-container-xl);\n                            padding-top: var(--chakra-space-3);\n                            position: relative;\n                        }\n\n                        @media screen and (min-width: 48em) {\n                            .css-1b23abr {\n                                padding-top:var(--chakra-space-6);\n                            }\n                        }\n                    ",
      }}
    />
    <div
      className="chakra-container css-1b23abr"
      data-sentry-element="Container"
      data-sentry-component="PageContent"
      data-sentry-source-file="PageContent.tsx"
    >
      <style
        data-emotion="css 11sjbww"
        dangerouslySetInnerHTML={{
          __html:
            "\n                            .css-11sjbww {\n                                display: -webkit-box;\n                                display: -webkit-flex;\n                                display: -ms-flexbox;\n                                display: flex;\n                                -webkit-align-items: stretch;\n                                -webkit-box-align: stretch;\n                                -ms-flex-align: stretch;\n                                align-items: stretch;\n                                -webkit-flex-direction: column;\n                                -ms-flex-direction: column;\n                                flex-direction: column;\n                                gap: 0.5rem;\n                                -webkit-align-self: stretch;\n                                -ms-flex-item-align: stretch;\n                                align-self: stretch;\n                                padding-top: var(--chakra-space-8);\n                                padding-bottom: var(--chakra-space-8);\n                            }\n                        ",
        }}
      />
      <div
        className="chakra-stack css-11sjbww"
        data-sentry-element="VStack"
        data-sentry-source-file="PageContent.tsx"
      >
        <canvas
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "400px",
          }}
        />
        <style
          data-emotion="css 1m8kmbq"
          dangerouslySetInnerHTML={{
            __html:
              "\n                                .css-1m8kmbq {\n                                    display: grid;\n                                    grid-gap: var(--chakra-space-6);\n                                    grid-template-columns: 1fr;\n                                }\n\n                                @media screen and (min-width: 62em) {\n                                    .css-1m8kmbq {\n                                        grid-template-columns:1fr 1fr;\n                                    }\n                                }\n\n                                @media screen and (min-width: 80em) {\n                                    .css-1m8kmbq {\n                                        grid-template-columns:repeat(3, 1fr);\n                                    }\n                                }\n                            ",
          }}
        />
        <div
          data-sentry-element="Grid"
          data-sentry-source-file="PageContent.tsx"
          className="css-1m8kmbq"
        >
          <style
            data-emotion="css vfvohe"
            dangerouslySetInnerHTML={{
              __html:
                "\n                                    .css-vfvohe {\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-flex-direction: column;\n                                        -ms-flex-direction: column;\n                                        flex-direction: column;\n                                        position: relative;\n                                        word-wrap: break-word;\n                                        --card-bg: var(--chakra-colors-chakra-body-bg);\n                                        background-color: var(--card-bg);\n                                        box-shadow: var(--card-shadow);\n                                        border-radius: var(--card-radius);\n                                        color: var(--chakra-colors-chakra-body-text);\n                                        border-width: var(--card-border-width, 0);\n                                        border-color: var(--card-border-color);\n                                        --card-radius: var(--chakra-radii-md);\n                                        --card-padding: var(--chakra-space-5);\n                                        --card-shadow: var(--chakra-shadows-base);\n                                        padding: 0px;\n                                        -webkit-order: 2;\n                                        -ms-flex-order: 2;\n                                        order: 2;\n                                        background: unset;\n                                        border: 0;\n                                        overflow: hidden;\n                                        min-width: 0px;\n                                    }\n\n                                    .chakra-ui-dark .css-vfvohe:not([data-theme]),[data-theme=dark] .css-vfvohe:not([data-theme]),.css-vfvohe[data-theme=dark] {\n                                        --card-bg: var(--chakra-colors-gray-700);\n                                    }\n\n                                    @media screen and (min-width: 62em) {\n                                        .css-vfvohe {\n                                            padding:var(--chakra-space-16);\n                                            -webkit-order: 1;\n                                            -ms-flex-order: 1;\n                                            order: 1;\n                                            background: background:radial-gradient(60.6% 55.06% at 50% 20.25%, rgba(168, 220, 250, 0.05) 0%, rgba(168, 220, 250, 0) 100%);\n                                            border: 4px solid rgba(255, 255, 255, 0.03);\n                                        }\n                                    }\n                                ",
            }}
          />
          <div className="chakra-card css-vfvohe">
            <style
              data-emotion="css 1nuiec7"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                        .css-1nuiec7 {\n                                            display: -webkit-box;\n                                            display: -webkit-flex;\n                                            display: -ms-flexbox;\n                                            display: flex;\n                                            -webkit-align-items: stretch;\n                                            -webkit-box-align: stretch;\n                                            -ms-flex-align: stretch;\n                                            align-items: stretch;\n                                            -webkit-flex-direction: column;\n                                            -ms-flex-direction: column;\n                                            flex-direction: column;\n                                            gap: var(--chakra-space-7);\n                                        }\n                                    ",
              }}
            />
            <div className="chakra-stack css-1nuiec7">
              <style
                data-emotion="css 1kxonj9"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1kxonj9 {\n                                                width: 100%;\n                                                position: relative;\n                                            }\n                                        ",
                }}
              />
              <div
                role="group"
                className="chakra-form-control css-1kxonj9"
              >
                <style
                  data-emotion="css dqkojv"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-dqkojv {\n                                                    display: block;\n                                                    text-align: start;\n                                                    font-size: var(--chakra-fontSizes-md);\n                                                    -webkit-margin-end: var(--chakra-space-3);\n                                                    margin-inline-end:var(--chakra-space-3);margin-bottom: var(--chakra-space-2);\n                                                    transition-property: var(--chakra-transition-property-common);\n                                                    transition-duration: var(--chakra-transition-duration-normal);\n                                                    opacity: 1;\n                                                    font-weight: 900;\n                                                }\n\n                                                .css-dqkojv:disabled,.css-dqkojv[disabled],.css-dqkojv[aria-disabled=true],.css-dqkojv[data-disabled] {\n                                                    opacity: 0.4;\n                                                }\n                                            ",
                  }}
                />
                <label
                  id="field-:Rd3ad7rmoauikq:-label"
                  htmlFor="field-:Rd3ad7rmoauikq:"
                  className="chakra-form__label css-dqkojv"
                >
                  Price
                </label>
                <style
                  data-emotion="css 1y0e7gb"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-1y0e7gb {\n                                                    width: 100%;\n                                                    display: -webkit-box;\n                                                    display: -webkit-flex;\n                                                    display: -ms-flexbox;\n                                                    display: flex;\n                                                    position: relative;\n                                                    isolation: isolate;\n                                                    --input-font-size: var(--chakra-fontSizes-md);\n                                                    --input-padding: var(--chakra-space-4);\n                                                    --input-border-radius: var(--chakra-radii-md);\n                                                    --input-height: var(--chakra-sizes-10);\n                                                }\n                                            ",
                  }}
                />
                <div
                  className="chakra-input__group css-1y0e7gb"
                  data-group="true"
                >
                  <style
                    data-emotion="css r6in0t"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-r6in0t {\n                                                        -webkit-padding-start: var(--input-padding);\n                                                        padding-inline-start:var(--input-padding);-webkit-padding-end: var(--input-padding);\n                                                        padding-inline-end:var(--input-padding);border-radius: var(--input-border-radius);\n                                                        border: 1px solid;\n                                                        border-color: inherit;\n                                                        background: var(--chakra-colors-gray-100);\n                                                        -webkit-margin-end: -1px;\n                                                        margin-inline-end:-1px;border-top-right-radius: 0;\n                                                        border-bottom-right-radius: 0;\n                                                        border-inline-end-color:var(--chakra-colors-transparent);-webkit-flex: 0 0 auto;\n                                                        -ms-flex: 0 0 auto;\n                                                        flex: 0 0 auto;\n                                                        width: auto;\n                                                        display: -webkit-box;\n                                                        display: -webkit-flex;\n                                                        display: -ms-flexbox;\n                                                        display: flex;\n                                                        -webkit-align-items: center;\n                                                        -webkit-box-align: center;\n                                                        -ms-flex-align: center;\n                                                        align-items: center;\n                                                        white-space: nowrap;\n                                                        height: var(--chakra-sizes-12);\n                                                        font-size: 20px;\n                                                    }\n                                                ",
                    }}
                  />
                  <div className="chakra-input__left-addon css-r6in0t">
                    $
                  </div>
                  <style
                    data-emotion="css 2ziv6d"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-2ziv6d {\n                                                        position: relative;\n                                                        z-index: 0;\n                                                        --number-input-stepper-width: var(--chakra-sizes-6);\n                                                        --number-input-input-padding: calc(var(--number-input-stepper-width) + 0.5rem);\n                                                        -webkit-flex: 1;\n                                                        -ms-flex: 1;\n                                                        flex: 1;\n                                                    }\n                                                ",
                    }}
                  />
                  <div
                    value={0.0}
                    className="chakra-numberinput css-2ziv6d"
                  >
                    <style
                      data-emotion="css au8aly"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                        .css-au8aly {\n                                                            width: 100%;\n                                                            -webkit-padding-start: var(--input-padding);\n                                                            padding-inline-start:var(--input-padding);-webkit-padding-end: var(--number-input-input-padding);\n                                                            padding-inline-end:var(--number-input-input-padding);min-width: 0px;\n                                                            outline: 2px solid transparent;\n                                                            outline-offset: 2px;\n                                                            position: relative;\n                                                            -webkit-appearance: none;\n                                                            -moz-appearance: none;\n                                                            -ms-appearance: none;\n                                                            appearance: none;\n                                                            transition-property: var(--chakra-transition-property-common);\n                                                            transition-duration: var(--chakra-transition-duration-normal);\n                                                            --input-font-size: var(--chakra-fontSizes-md);\n                                                            --input-padding: var(--chakra-space-4);\n                                                            --input-border-radius: var(--chakra-radii-md);\n                                                            --input-height: var(--chakra-sizes-10);\n                                                            vertical-align: top;\n                                                            border-color: inherit;\n                                                            background: rgba(255, 255, 255, 0.03);\n                                                            border: 0;\n                                                            border-radius: var(--chakra-radii-lg);\n                                                            border-top-left-radius: 0px;\n                                                            border-bottom-left-radius: 0px;\n                                                            height: var(--chakra-sizes-12);\n                                                            font-weight: 900;\n                                                            font-size: 20px;\n                                                        }\n\n                                                        .css-au8aly:disabled,.css-au8aly[disabled],.css-au8aly[aria-disabled=true],.css-au8aly[data-disabled] {\n                                                            opacity: 0.4;\n                                                            cursor: not-allowed;\n                                                        }\n\n                                                        .css-au8aly:hover,.css-au8aly[data-hover] {\n                                                            border-color: var(--chakra-colors-gray-300);\n                                                        }\n\n                                                        .css-au8aly[aria-readonly=true],.css-au8aly[readonly],.css-au8aly[data-readonly] {\n                                                            box-shadow: var(--chakra-shadows-none)!important;\n                                                            -webkit-user-select: all;\n                                                            -moz-user-select: all;\n                                                            -ms-user-select: all;\n                                                            user-select: all;\n                                                        }\n\n                                                        .css-au8aly[aria-invalid=true],.css-au8aly[data-invalid] {\n                                                            border-color: #E53E3E;\n                                                            box-shadow: 0 0 0 1px #E53E3E;\n                                                        }\n\n                                                        .css-au8aly:focus-visible,.css-au8aly[data-focus-visible] {\n                                                            z-index: 1;\n                                                            border-color: #3182ce;\n                                                            box-shadow: 0 0 0 1px #3182ce;\n                                                        }\n                                                    ",
                      }}
                    />
                    <input
                      inputMode="decimal"
                      type="text"
                      pattern="[0-9]*(.[0-9]+)?"
                      id="field-:Rd3ad7rmoauikq:"
                      disabled
                      aria-readonly="false"
                      aria-required="false"
                      role="spinbutton"
                      aria-valuemin={0}
                      aria-valuemax={0}
                      aria-valuenow={0}
                      aria-valuetext={0.0}
                      autoComplete="off"
                      autoCorrect="off"
                      className="chakra-numberinput__field css-au8aly"
                      defaultValue={0.0}
                    />
                  </div>
                </div>
              </div>
              <style
                data-emotion="css 1ln20se"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1ln20se {\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                padding: var(--chakra-space-2);\n                                            }\n\n                                            @media screen and (min-width: 62em) {\n                                                .css-1ln20se {\n                                                    padding:0px;\n                                                }\n                                            }\n                                        ",
                }}
              />
              <div className="css-1ln20se">
                <style
                  data-emotion="css 1t1xvy7"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-1t1xvy7 {\n                                                    display: inline-block;\n                                                    position: relative;\n                                                    cursor: pointer;\n                                                    width: 100%;\n                                                    --slider-thumb-size: var(--chakra-sizes-3-5);\n                                                    --slider-track-size: var(--chakra-sizes-1);\n                                                }\n\n                                                .css-1t1xvy7:disabled,.css-1t1xvy7[disabled],.css-1t1xvy7[aria-disabled=true],.css-1t1xvy7[data-disabled] {\n                                                    opacity: 0.6;\n                                                    cursor: default;\n                                                    pointer-events: none;\n                                                }\n                                            ",
                  }}
                />
                <div
                  tabIndex={-1}
                  aria-disabled="true"
                  style={{
                    position: "relative",
                    "touch-action": "none",
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none",
                    outline: "0",
                    "padding-top": "0",
                    "padding-bottom": "0",
                  }}
                  className="chakra-slider css-1t1xvy7"
                >
                  <style
                    data-emotion="css 1o44xu5"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-1o44xu5 {\n                                                        height: var(--slider-track-size);\n                                                        overflow: hidden;\n                                                        border-radius: var(--chakra-radii-sm);\n                                                        --slider-bg: var(--chakra-colors-gray-200);\n                                                        background: rgba(255, 255, 255, 0.03);\n                                                    }\n\n                                                    .chakra-ui-dark .css-1o44xu5:not([data-theme]),[data-theme=dark] .css-1o44xu5:not([data-theme]),.css-1o44xu5[data-theme=dark] {\n                                                        --slider-bg: var(--chakra-colors-whiteAlpha-200);\n                                                    }\n\n                                                    .css-1o44xu5:disabled,.css-1o44xu5[disabled],.css-1o44xu5[aria-disabled=true],.css-1o44xu5[data-disabled] {\n                                                        --slider-bg: var(--chakra-colors-gray-300);\n                                                    }\n\n                                                    .chakra-ui-dark .css-1o44xu5:disabled:not([data-theme]),.chakra-ui-dark .css-1o44xu5[disabled]:not([data-theme]),.chakra-ui-dark .css-1o44xu5[aria-disabled=true]:not([data-theme]),.chakra-ui-dark .css-1o44xu5[data-disabled]:not([data-theme]),[data-theme=dark] .css-1o44xu5:disabled:not([data-theme]),[data-theme=dark] .css-1o44xu5[disabled]:not([data-theme]),[data-theme=dark] .css-1o44xu5[aria-disabled=true]:not([data-theme]),[data-theme=dark] .css-1o44xu5[data-disabled]:not([data-theme]),.css-1o44xu5:disabled[data-theme=dark],.css-1o44xu5[disabled][data-theme=dark],.css-1o44xu5[aria-disabled=true][data-theme=dark],.css-1o44xu5[data-disabled][data-theme=dark] {\n                                                        --slider-bg: var(--chakra-colors-whiteAlpha-300);\n                                                    }\n                                                ",
                    }}
                  />
                  <div
                    id="slider-track-:R2l3ad7rmoauikq:"
                    data-disabled
                    style={{
                      position: "absolute",
                      top: "50%",
                      "-webkit-transform": "translateY(-50%)",
                      "-ms-transform": "translateY(-50%)",
                      transform: "translateY(-50%)",
                      width: "100%",
                    }}
                    className="chakra-slider__track css-1o44xu5"
                  >
                    <style
                      data-emotion="css 1m7iqxj"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                        .css-1m7iqxj {\n                                                            width: inherit;\n                                                            height: inherit;\n                                                            --slider-bg: var(--chakra-colors-blue-500);\n                                                            background: var(--slider-bg);\n                                                        }\n\n                                                        .chakra-ui-dark .css-1m7iqxj:not([data-theme]),[data-theme=dark] .css-1m7iqxj:not([data-theme]),.css-1m7iqxj[data-theme=dark] {\n                                                            --slider-bg: var(--chakra-colors-blue-200);\n                                                        }\n                                                    ",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        "-webkit-transform": "translateY(-50%)",
                        "-ms-transform": "translateY(-50%)",
                        transform: "translateY(-50%)",
                        width: "0%",
                        left: "0%",
                      }}
                      className="chakra-slider__filled-track css-1m7iqxj"
                    />
                  </div>
                  <style
                    data-emotion="css zi3uu"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-zi3uu {\n                                                        top: 50%;\n                                                        -webkit-transform: translateY(-50%);\n                                                        -moz-transform: translateY(-50%);\n                                                        -ms-transform: translateY(-50%);\n                                                        transform: translateY(-50%);\n                                                        width: var(--chakra-sizes-4);\n                                                        height: var(--chakra-sizes-4);\n                                                        display: -webkit-box;\n                                                        display: -webkit-flex;\n                                                        display: -ms-flexbox;\n                                                        display: flex;\n                                                        -webkit-align-items: center;\n                                                        -webkit-box-align: center;\n                                                        -ms-flex-align: center;\n                                                        align-items: center;\n                                                        -webkit-box-pack: center;\n                                                        -ms-flex-pack: center;\n                                                        -webkit-justify-content: center;\n                                                        justify-content: center;\n                                                        position: absolute;\n                                                        outline: 2px solid transparent;\n                                                        outline-offset: 2px;\n                                                        z-index: 1;\n                                                        border-radius: var(--chakra-radii-full);\n                                                        background: white;\n                                                        box-shadow: var(--chakra-shadows-base);\n                                                        border: 1px solid;\n                                                        border-color: var(--chakra-colors-transparent);\n                                                        transition-property: transform;\n                                                        transition-duration: var(--chakra-transition-duration-normal);\n                                                    }\n\n                                                    .css-zi3uu:active,.css-zi3uu[data-active] {\n                                                        -webkit-transform: translateY(-50%) scale(1.15);\n                                                        -moz-transform: translateY(-50%) scale(1.15);\n                                                        -ms-transform: translateY(-50%) scale(1.15);\n                                                        transform: translateY(-50%) scale(1.15);\n                                                    }\n\n                                                    .css-zi3uu:focus-visible,.css-zi3uu[data-focus-visible] {\n                                                        box-shadow: var(--chakra-shadows-outline);\n                                                    }\n\n                                                    .css-zi3uu:disabled,.css-zi3uu[disabled],.css-zi3uu[aria-disabled=true],.css-zi3uu[data-disabled] {\n                                                        background: var(--chakra-colors-gray-300);\n                                                    }\n                                                ",
                    }}
                  />
                  <div
                    role="slider"
                    id="slider-thumb-:R2l3ad7rmoauikq:"
                    aria-valuemin={10000}
                    aria-valuemax={800000}
                    aria-valuenow={10000}
                    aria-orientation="horizontal"
                    aria-disabled="true"
                    aria-label="Price Slider"
                    style={{
                      position: "absolute",
                      "-webkit-user-select": "none",
                      "-moz-user-select": "none",
                      "-ms-user-select": "none",
                      "user-select": "none",
                      "touch-action": "none",
                    }}
                    className="chakra-slider__thumb css-zi3uu"
                  >
                    <style
                      data-emotion="css n4rkm3"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                        .css-n4rkm3 {\n                                                            background: rgba(171, 185, 203, 1);\n                                                            border-radius: var(--chakra-radii-full);\n                                                            width: var(--chakra-sizes-2);\n                                                            height: var(--chakra-sizes-2);\n                                                        }\n                                                    ",
                      }}
                    />
                    <div className="css-n4rkm3" />
                  </div>
                  <input type="hidden" defaultValue={10000} />
                </div>
              </div>
              <style
                data-emotion="css 1l2sq8e"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1l2sq8e {\n                                                display: grid;\n                                                grid-gap: var(--chakra-space-1);\n                                                grid-template-columns: repeat(5, 1fr);\n                                                -webkit-align-self: stretch;\n                                                -ms-flex-item-align: stretch;\n                                                align-self: stretch;\n                                            }\n                                        ",
                }}
              />
              <div className="css-1l2sq8e">
                <style
                  data-emotion="css 11lr2n2"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-11lr2n2 {\n                                                    display: -webkit-inline-box;\n                                                    display: -webkit-inline-flex;\n                                                    display: -ms-inline-flexbox;\n                                                    display: inline-flex;\n                                                    -webkit-appearance: none;\n                                                    -moz-appearance: none;\n                                                    -ms-appearance: none;\n                                                    appearance: none;\n                                                    -webkit-align-items: center;\n                                                    -webkit-box-align: center;\n                                                    -ms-flex-align: center;\n                                                    align-items: center;\n                                                    -webkit-box-pack: center;\n                                                    -ms-flex-pack: center;\n                                                    -webkit-justify-content: center;\n                                                    justify-content: center;\n                                                    -webkit-user-select: none;\n                                                    -moz-user-select: none;\n                                                    -ms-user-select: none;\n                                                    user-select: none;\n                                                    position: relative;\n                                                    white-space: nowrap;\n                                                    vertical-align: middle;\n                                                    outline: 2px solid transparent;\n                                                    outline-offset: 2px;\n                                                    line-height: 1.2;\n                                                    border-radius: 0.5rem;\n                                                    font-weight: var(--chakra-fontWeights-semibold);\n                                                    transition-property: var(--chakra-transition-property-common);\n                                                    transition-duration: var(--chakra-transition-duration-normal);\n                                                    height: var(--chakra-sizes-10);\n                                                    min-width: var(--chakra-sizes-10);\n                                                    font-size: var(--chakra-fontSizes-md);\n                                                    -webkit-padding-start: var(--chakra-space-4);\n                                                    padding-inline-start:var(--chakra-space-4);-webkit-padding-end: var(--chakra-space-4);\n                                                    padding-inline-end:var(--chakra-space-4);background: var(--chakra-colors-gray-100);\n                                                    color: var(--chakra-colors-gray-800);\n                                                }\n\n                                                .css-11lr2n2:focus-visible,.css-11lr2n2[data-focus-visible] {\n                                                    box-shadow: var(--chakra-shadows-outline);\n                                                }\n\n                                                .css-11lr2n2:disabled,.css-11lr2n2[disabled],.css-11lr2n2[aria-disabled=true],.css-11lr2n2[data-disabled] {\n                                                    opacity: 0.4;\n                                                    cursor: not-allowed;\n                                                    box-shadow: var(--chakra-shadows-none);\n                                                }\n\n                                                .css-11lr2n2:hover,.css-11lr2n2[data-hover] {\n                                                    background: var(--chakra-colors-gray-200);\n                                                }\n\n                                                .css-11lr2n2:hover:disabled,.css-11lr2n2[data-hover]:disabled,.css-11lr2n2:hover[disabled],.css-11lr2n2[data-hover][disabled],.css-11lr2n2:hover[aria-disabled=true],.css-11lr2n2[data-hover][aria-disabled=true],.css-11lr2n2:hover[data-disabled],.css-11lr2n2[data-hover][data-disabled] {\n                                                    background: var(--chakra-colors-gray-100);\n                                                }\n\n                                                .css-11lr2n2:active,.css-11lr2n2[data-active] {\n                                                    background: var(--chakra-colors-gray-300);\n                                                }\n                                            ",
                  }}
                />
                <button
                  type="button"
                  className="chakra-button css-11lr2n2"
                  disabled
                >
                  Min
                </button>
                <button
                  type="button"
                  className="chakra-button css-11lr2n2"
                  disabled
                >
                  10%
                </button>
                <button
                  type="button"
                  className="chakra-button css-11lr2n2"
                  disabled
                >
                  25%
                </button>
                <button
                  type="button"
                  className="chakra-button css-11lr2n2"
                  disabled
                >
                  50%
                </button>
                <button
                  type="button"
                  className="chakra-button css-11lr2n2"
                  disabled
                >
                  Max
                </button>
              </div>
            </div>
          </div>
          <style
            data-emotion="css 18po3v1"
            dangerouslySetInnerHTML={{
              __html:
                "\n                                    .css-18po3v1 {\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-align-items: center;\n                                        -webkit-box-align: center;\n                                        -ms-flex-align: center;\n                                        align-items: center;\n                                        -webkit-flex-direction: column;\n                                        -ms-flex-direction: column;\n                                        flex-direction: column;\n                                        gap: 0.5rem;\n                                        -webkit-order: 1;\n                                        -ms-flex-order: 1;\n                                        order: 1;\n                                        overflow: hidden;\n                                        min-width: 0px;\n                                    }\n\n                                    @media screen and (min-width: 62em) {\n                                        .css-18po3v1 {\n                                            -webkit-order:2;\n                                            -ms-flex-order: 2;\n                                            order: 2;\n                                        }\n                                    }\n                                ",
            }}
          />
          <div
            className="chakra-stack css-18po3v1"
            data-sentry-element="VStack"
            data-sentry-source-file="PageContent.tsx"
          >
            <style
              data-emotion="css e7hbe5"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                        .css-e7hbe5 {\n                                            height: 320px;\n                                            width: 320px;\n                                            position: relative;\n                                            -webkit-user-select: none;\n                                            -moz-user-select: none;\n                                            -ms-user-select: none;\n                                            user-select: none;\n                                        }\n                                    ",
              }}
            />
            <div
              style={{ "touch-action": "none" }}
              data-sentry-element="Box"
              data-sentry-component="WagerDial"
              data-sentry-source-file="WagerDial.tsx"
              className="css-e7hbe5"
            >
              <div
                data-sentry-element="Box"
                data-sentry-source-file="WagerDial.tsx"
                className="css-0"
              >
                <style
                  data-emotion="css 1ya4enh"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-1ya4enh {\n                                                    width: 320px;\n                                                    height: 320px;\n                                                    display: inline-block;\n                                                    line-height: 1em;\n                                                    -webkit-flex-shrink: 0;\n                                                    -ms-flex-negative: 0;\n                                                    flex-shrink: 0;\n                                                    color: currentColor;\n                                                    vertical-align: middle;\n                                                }\n                                            ",
                  }}
                />
                <svg
                  viewBox="0 0 320 320"
                  focusable="false"
                  className="chakra-icon css-1ya4enh"
                  data-sentry-element="Icon"
                  data-sentry-component="ArcSVG"
                  data-sentry-source-file="ArcSVG.tsx"
                >
                  <circle
                    cx={160}
                    cy={160}
                    r={120}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeOpacity="0.08"
                    strokeWidth={16}
                    cursor="grab"
                    data-sentry-element="circle"
                    data-sentry-source-file="ArcSVG.tsx"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M 159.99999999999997 40 A 120 120 0 0 1 159.99999999999997 40"
                    fill="none"
                    stroke="#38A169"
                    strokeWidth={16}
                    cursor="grab"
                    data-sentry-element="path"
                    data-sentry-source-file="ArcSVG.tsx"
                  />
                </svg>
              </div>
              <style
                data-emotion="css 1goa8ow"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1goa8ow {\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                -webkit-box-pack: center;\n                                                -ms-flex-pack: center;\n                                                -webkit-justify-content: center;\n                                                justify-content: center;\n                                                -webkit-flex-direction: column;\n                                                -ms-flex-direction: column;\n                                                flex-direction: column;\n                                                gap: 0.5rem;\n                                                height: 320px;\n                                                width: 320px;\n                                                position: absolute;\n                                                -webkit-transform: translate(0px, -320px);\n                                                -moz-transform: translate(0px, -320px);\n                                                -ms-transform: translate(0px, -320px);\n                                                transform: translate(0px, -320px);\n                                                padding: var(--chakra-space-14);\n                                            }\n                                        ",
                }}
              />
              <div
                className="chakra-stack css-1goa8ow"
                data-sentry-element="VStack"
                data-sentry-source-file="WagerDial.tsx"
              >
                <style
                  data-emotion="css 1gkqv8n"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-1gkqv8n {\n                                                    font-size: var(--chakra-fontSizes-xl);\n                                                    font-weight: var(--chakra-fontWeights-bold);\n                                                    -webkit-user-select: none;\n                                                    -moz-user-select: none;\n                                                    -ms-user-select: none;\n                                                    user-select: none;\n                                                }\n                                            ",
                  }}
                />
                <p className="chakra-text css-1gkqv8n">0.00%</p>
              </div>
              <style
                data-emotion="css yebb33"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-yebb33 {\n                                                visibility: hidden;\n                                                position: absolute;\n                                                -webkit-transform: translate(168.39314168050396px, -279.70612003039355px);\n                                                -moz-transform: translate(168.39314168050396px, -279.70612003039355px);\n                                                -ms-transform: translate(168.39314168050396px, -279.70612003039355px);\n                                                transform: translate(168.39314168050396px, -279.70612003039355px);\n                                            }\n                                        ",
                }}
              />
              <div
                data-sentry-element="Box"
                data-sentry-source-file="WagerDial.tsx"
                className="css-yebb33"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    "-webkit-transform": "translate(-50%, -50%)",
                    "-ms-transform": "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                    cursor: "grab",
                  }}
                  data-sentry-element="svg"
                  data-sentry-component="KnobSVG"
                  data-sentry-source-file="KnobSVG.tsx"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={3}
                    fill="white"
                    data-sentry-element="circle"
                    data-sentry-source-file="KnobSVG.tsx"
                  />
                </svg>
              </div>
              <style
                data-emotion="css 1stje8l"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1stje8l {\n                                                visibility: hidden;\n                                                position: absolute;\n                                                -webkit-transform: translate(151.606858319496px, -279.70612003039355px);\n                                                -moz-transform: translate(151.606858319496px, -279.70612003039355px);\n                                                -ms-transform: translate(151.606858319496px, -279.70612003039355px);\n                                                transform: translate(151.606858319496px, -279.70612003039355px);\n                                            }\n                                        ",
                }}
              />
              <div
                data-sentry-element="Box"
                data-sentry-source-file="WagerDial.tsx"
                className="css-1stje8l"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    "-webkit-transform": "translate(-50%, -50%)",
                    "-ms-transform": "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                    cursor: "grab",
                  }}
                  data-sentry-element="svg"
                  data-sentry-component="KnobSVG"
                  data-sentry-source-file="KnobSVG.tsx"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={3}
                    fill="white"
                    data-sentry-element="circle"
                    data-sentry-source-file="KnobSVG.tsx"
                  />
                </svg>
              </div>
              <style
                data-emotion="css gx8am6"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-gx8am6 {\n                                                position: absolute;\n                                                transform-origin: top left;\n                                                -webkit-transform: translate(159.99999999999997px, -296px) rotate(6.283185307179586rad);\n                                                -moz-transform: translate(159.99999999999997px, -296px) rotate(6.283185307179586rad);\n                                                -ms-transform: translate(159.99999999999997px, -296px) rotate(6.283185307179586rad);\n                                                transform: translate(159.99999999999997px, -296px) rotate(6.283185307179586rad);\n                                            }\n                                        ",
                }}
              />
              <div
                data-sentry-element="Box"
                data-sentry-source-file="WagerDial.tsx"
                className="css-gx8am6"
              >
                <svg
                  width={16}
                  height={19}
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    "-webkit-transform": "translate(-50%, -100%)",
                    "-ms-transform": "translate(-50%, -100%)",
                    transform: "translate(-50%, -100%)",
                    opacity: "0",
                  }}
                  data-sentry-element="svg"
                  data-sentry-component="ArrowSVG"
                  data-sentry-source-file="ArrowSVG.tsx"
                >
                  <mask
                    id="path-1-outside-1_559_1533"
                    maskUnits="userSpaceOnUse"
                    x={-1}
                    y={0}
                    width={20}
                    height={21}
                    fill="black"
                    data-sentry-element="mask"
                    data-sentry-source-file="ArrowSVG.tsx"
                  >
                    <rect
                      fill="white"
                      x={-1}
                      width={20}
                      height={21}
                      data-sentry-element="rect"
                      data-sentry-source-file="ArrowSVG.tsx"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.19568 7L4.18233 3.83192C3.66534 3.01843 4.30928 2 5.34062 2H12.6593C13.7088 2 14.3501 3.05089 13.7966 3.86376L11.6611 7H14.123C15.5923 7 16.4901 8.57634 15.7152 9.79564L10.4155 18.1349C9.66932 19.3091 7.91096 19.283 7.20166 18.0872L2.25526 9.74788C1.53148 8.52764 2.43299 7 3.87686 7H6.19568Z"
                      data-sentry-element="path"
                      data-sentry-source-file="ArrowSVG.tsx"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.19568 7L4.18233 3.83192C3.66534 3.01843 4.30928 2 5.34062 2H12.6593C13.7088 2 14.3501 3.05089 13.7966 3.86376L11.6611 7H14.123C15.5923 7 16.4901 8.57634 15.7152 9.79564L10.4155 18.1349C9.66932 19.3091 7.91096 19.283 7.20166 18.0872L2.25526 9.74788C1.53148 8.52764 2.43299 7 3.87686 7H6.19568Z"
                    fill="white"
                    data-sentry-element="path"
                    data-sentry-source-file="ArrowSVG.tsx"
                  />
                  <path
                    d="M4.18233 3.83192L5.87031 2.7592L5.8703 2.75919L4.18233 3.83192ZM6.19568 7V9H9.83641L7.88365 5.92727L6.19568 7ZM13.7966 3.86376L12.1435 2.73807L12.1434 2.73811L13.7966 3.86376ZM11.6611 7L10.0079 5.87436L7.87967 9H11.6611V7ZM15.7152 9.79564L14.0273 8.72287L14.0272 8.72291L15.7152 9.79564ZM10.4155 18.1349L8.72757 17.0621L8.72753 17.0622L10.4155 18.1349ZM7.20166 18.0872L5.4815 19.1075L5.48151 19.1075L7.20166 18.0872ZM2.25526 9.74788L3.97543 8.72758L3.97543 8.72757L2.25526 9.74788ZM2.49436 4.90465L4.50771 8.07273L7.88365 5.92727L5.87031 2.7592L2.49436 4.90465ZM5.34062 0C4.14507 0 3.08542 0.60101 2.49041 1.54207C1.88433 2.50063 1.78875 3.79436 2.49436 4.90465L5.8703 2.75919C6.05893 3.056 6.02681 3.43376 5.87129 3.67973C5.72684 3.9082 5.50482 4 5.34062 4V0ZM12.6593 0H5.34062V4H12.6593V0ZM15.4497 4.98945C16.2016 3.88529 16.1363 2.56843 15.5363 1.58525C14.9478 0.6208 13.8754 0 12.6593 0V4C12.4927 4 12.2657 3.90465 12.1218 3.66886C12.0511 3.55295 11.9989 3.39814 12 3.21726C12.0012 3.02801 12.0609 2.85932 12.1435 2.73807L15.4497 4.98945ZM13.3143 8.12564L15.4497 4.9894L12.1434 2.73811L10.0079 5.87436L13.3143 8.12564ZM14.123 5H11.6611V9H14.123V5ZM17.4032 10.8684C19.0699 8.2459 17.0843 5 14.123 5V9C14.1247 9 14.1018 8.9984 14.0733 8.98136C14.05 8.96737 14.0337 8.94957 14.0228 8.9304C14.0119 8.9112 13.9997 8.87882 14 8.83289C14.0003 8.77994 14.0172 8.73865 14.0273 8.72287L17.4032 10.8684ZM12.1035 19.2076L17.4032 10.8684L14.0272 8.72291L8.72757 17.0621L12.1035 19.2076ZM5.48151 19.1075C6.95315 21.5885 10.5586 21.6387 12.1035 19.2075L8.72753 17.0622C8.73777 17.0461 8.75968 17.0246 8.78587 17.0112C8.80692 17.0004 8.82004 16.9999 8.82446 17C8.82888 17.0001 8.8423 17.001 8.86354 17.0127C8.88987 17.0272 8.91168 17.0498 8.92181 17.0668L5.48151 19.1075ZM0.535097 10.7682L5.4815 19.1075L8.92183 17.0669L3.97543 8.72758L0.535097 10.7682ZM3.87686 5C0.966316 5 -1.02164 8.14365 0.5351 10.7682L3.97543 8.72757C3.98562 8.74476 4.00083 8.78597 3.99997 8.83737C3.99921 8.88221 3.98683 8.91384 3.97563 8.93281C3.96446 8.95175 3.94825 8.96892 3.9256 8.98222C3.89817 8.99834 3.87605 9 3.87686 9V5ZM6.19568 5H3.87686V9H6.19568V5Z"
                    fill="#6D6D6D"
                    mask="url(#path-1-outside-1_559_1533)"
                    data-sentry-element="path"
                    data-sentry-source-file="ArrowSVG.tsx"
                  />
                </svg>
              </div>
            </div>
            <style
              data-emotion="css 1vf7bhc"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                        .css-1vf7bhc {\n                                            display: none;\n                                            -webkit-align-items: center;\n                                            -webkit-box-align: center;\n                                            -ms-flex-align: center;\n                                            align-items: center;\n                                            -webkit-flex-direction: row;\n                                            -ms-flex-direction: row;\n                                            flex-direction: row;\n                                            gap: 0.5rem;\n                                        }\n\n                                        @media screen and (min-width: 62em) {\n                                            .css-1vf7bhc {\n                                                display:-webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                            }\n                                        }\n                                    ",
              }}
            />
            <div
              className="chakra-stack css-1vf7bhc"
              data-sentry-element="HStack"
              data-sentry-source-file="PageContent.tsx"
            >
              <style
                data-emotion="css 10i55ai"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-10i55ai {\n                                                display: -webkit-inline-box;\n                                                display: -webkit-inline-flex;\n                                                display: -ms-inline-flexbox;\n                                                display: inline-flex;\n                                                -webkit-appearance: none;\n                                                -moz-appearance: none;\n                                                -ms-appearance: none;\n                                                appearance: none;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                -webkit-box-pack: center;\n                                                -ms-flex-pack: center;\n                                                -webkit-justify-content: center;\n                                                justify-content: center;\n                                                -webkit-user-select: none;\n                                                -moz-user-select: none;\n                                                -ms-user-select: none;\n                                                user-select: none;\n                                                position: relative;\n                                                white-space: nowrap;\n                                                vertical-align: middle;\n                                                outline: 2px solid transparent;\n                                                outline-offset: 2px;\n                                                line-height: 1.2;\n                                                border-radius: 0.5rem;\n                                                font-weight: var(--chakra-fontWeights-semibold);\n                                                transition-property: var(--chakra-transition-property-common);\n                                                transition-duration: var(--chakra-transition-duration-normal);\n                                                height: var(--chakra-sizes-12);\n                                                min-width: var(--chakra-sizes-12);\n                                                font-size: var(--chakra-fontSizes-lg);\n                                                -webkit-padding-start: var(--chakra-space-6);\n                                                padding-inline-start:var(--chakra-space-6);-webkit-padding-end: var(--chakra-space-6);\n                                                padding-inline-end:var(--chakra-space-6);background: var(--chakra-colors-gray-100);\n                                                background-color: var(--chakra-colors-green-500);\n                                                color: white;\n                                                width: 230px;\n                                            }\n\n                                            .css-10i55ai:focus-visible,.css-10i55ai[data-focus-visible] {\n                                                box-shadow: var(--chakra-shadows-outline);\n                                            }\n\n                                            .css-10i55ai:disabled,.css-10i55ai[disabled],.css-10i55ai[aria-disabled=true],.css-10i55ai[data-disabled] {\n                                                opacity: 0.4;\n                                                cursor: not-allowed;\n                                                box-shadow: var(--chakra-shadows-none);\n                                            }\n\n                                            .css-10i55ai:active,.css-10i55ai[data-active] {\n                                                background: var(--chakra-colors-gray-300);\n                                            }\n\n                                            .css-10i55ai:hover,.css-10i55ai[data-hover] {\n                                                background-color: var(--chakra-colors-green-600);\n                                            }\n                                        ",
                }}
              />
              <button
                type="button"
                className="chakra-button css-10i55ai"
                data-sentry-element="Button"
                data-sentry-source-file="PageContent.tsx"
                disabled
              >
                Select Product
              </button>
              <style
                data-emotion="css fpfkkm"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-fpfkkm {\n                                                display: -webkit-inline-box;\n                                                display: -webkit-inline-flex;\n                                                display: -ms-inline-flexbox;\n                                                display: inline-flex;\n                                                -webkit-appearance: none;\n                                                -moz-appearance: none;\n                                                -ms-appearance: none;\n                                                appearance: none;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                -webkit-box-pack: center;\n                                                -ms-flex-pack: center;\n                                                -webkit-justify-content: center;\n                                                justify-content: center;\n                                                -webkit-user-select: none;\n                                                -moz-user-select: none;\n                                                -ms-user-select: none;\n                                                user-select: none;\n                                                position: relative;\n                                                white-space: nowrap;\n                                                vertical-align: middle;\n                                                outline: 2px solid transparent;\n                                                outline-offset: 2px;\n                                                line-height: 1.2;\n                                                border-radius: 0.5rem;\n                                                font-weight: var(--chakra-fontWeights-semibold);\n                                                transition-property: var(--chakra-transition-property-common);\n                                                transition-duration: var(--chakra-transition-duration-normal);\n                                                height: var(--chakra-sizes-12);\n                                                min-width: var(--chakra-sizes-12);\n                                                font-size: var(--chakra-fontSizes-lg);\n                                                -webkit-padding-start: var(--chakra-space-6);\n                                                padding-inline-start:var(--chakra-space-6);-webkit-padding-end: var(--chakra-space-6);\n                                                padding-inline-end:var(--chakra-space-6);background: var(--chakra-colors-gray-100);\n                                                color: var(--chakra-colors-gray-800);\n                                            }\n\n                                            .css-fpfkkm:focus-visible,.css-fpfkkm[data-focus-visible] {\n                                                box-shadow: var(--chakra-shadows-outline);\n                                            }\n\n                                            .css-fpfkkm:disabled,.css-fpfkkm[disabled],.css-fpfkkm[aria-disabled=true],.css-fpfkkm[data-disabled] {\n                                                opacity: 0.4;\n                                                cursor: not-allowed;\n                                                box-shadow: var(--chakra-shadows-none);\n                                            }\n\n                                            .css-fpfkkm:hover,.css-fpfkkm[data-hover] {\n                                                background: var(--chakra-colors-gray-200);\n                                            }\n\n                                            .css-fpfkkm:hover:disabled,.css-fpfkkm[data-hover]:disabled,.css-fpfkkm:hover[disabled],.css-fpfkkm[data-hover][disabled],.css-fpfkkm:hover[aria-disabled=true],.css-fpfkkm[data-hover][aria-disabled=true],.css-fpfkkm:hover[data-disabled],.css-fpfkkm[data-hover][data-disabled] {\n                                                background: var(--chakra-colors-gray-100);\n                                            }\n\n                                            .css-fpfkkm:active,.css-fpfkkm[data-active] {\n                                                background: var(--chakra-colors-gray-300);\n                                            }\n                                        ",
                }}
              />
              <button
                type="button"
                className="chakra-button css-fpfkkm"
                data-sentry-element="Button"
                data-sentry-source-file="PageContent.tsx"
                disabled
              >
                <style
                  data-emotion="css 1wh2kri"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-1wh2kri {\n                                                    display: -webkit-inline-box;\n                                                    display: -webkit-inline-flex;\n                                                    display: -ms-inline-flexbox;\n                                                    display: inline-flex;\n                                                    -webkit-align-self: center;\n                                                    -ms-flex-item-align: center;\n                                                    align-self: center;\n                                                    -webkit-flex-shrink: 0;\n                                                    -ms-flex-negative: 0;\n                                                    flex-shrink: 0;\n                                                    -webkit-margin-end: 0.5rem;\n                                                    margin-inline-end:0.5rem;}\n                                            ",
                  }}
                />
                <span className="chakra-button__icon css-1wh2kri">
                  <style
                    data-emotion="css onkibi"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-onkibi {\n                                                        width: 1em;\n                                                        height: 1em;\n                                                        display: inline-block;\n                                                        line-height: 1em;\n                                                        -webkit-flex-shrink: 0;\n                                                        -ms-flex-negative: 0;\n                                                        flex-shrink: 0;\n                                                        color: currentColor;\n                                                        vertical-align: middle;\n                                                    }\n                                                ",
                    }}
                  />
                  <svg
                    viewBox="0 0 17 18"
                    focusable="false"
                    className="chakra-icon css-onkibi"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.0484 7.65351L16.1422 2.40444C16.4549 2.08217 17.001 2.30357 17.001 2.75265V8.00171C17.001 8.27785 16.7771 8.50171 16.501 8.50171H11.4072C10.9654 8.50171 10.7407 7.97059 11.0484 7.65351Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9554 7.06726C15.6673 6.64369 15.9162 5.71443 15.5113 4.9917C13.3794 1.18654 8.63378 -0.14786 4.89436 2.07691C1.15495 4.30168 -0.0964166 9.20398 2.0355 13.0091C4.16742 16.8143 8.91303 18.1487 12.6524 15.9239C13.3644 15.5004 13.6133 14.5711 13.2084 13.8484C12.8035 13.1257 11.898 12.8831 11.1861 13.3067C8.90694 14.6627 5.95662 13.8721 4.61371 11.4752C3.2708 9.07835 4.08155 6.05011 6.36071 4.69413C8.63988 3.33814 11.5902 4.12872 12.9331 6.52561C13.338 7.24833 14.2434 7.49084 14.9554 7.06726Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Demo Spin
              </button>
            </div>
          </div>
          <style
            data-emotion="css 11wqd4k"
            dangerouslySetInnerHTML={{
              __html:
                "\n                                    .css-11wqd4k {\n                                        position: relative;\n                                        display: none;\n                                        -webkit-order: 3;\n                                        -ms-flex-order: 3;\n                                        order: 3;\n                                        overflow: hidden;\n                                        min-width: 0px;\n                                    }\n\n                                    @media screen and (min-width: 80em) {\n                                        .css-11wqd4k {\n                                            display:-webkit-box;\n                                            display: -webkit-flex;\n                                            display: -ms-flexbox;\n                                            display: flex;\n                                        }\n                                    }\n                                ",
            }}
          />
          <div
            data-sentry-element="Box"
            data-sentry-source-file="PageContent.tsx"
            className="css-11wqd4k"
          >
            <style
              data-emotion="css t7kf30"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                        .css-t7kf30 {\n                                            background: radial-gradient(60.6% 55.06% at 50% 20.25%, rgba(232, 181, 2, 0.16) 0%, rgba(232, 181, 2, 0) 100%),rgba(255, 255, 255, 0.03);\n                                        }\n                                    ",
              }}
            />
            <style
              data-emotion="css 18tbqn"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                        .css-18tbqn {\n                                            display: -webkit-box;\n                                            display: -webkit-flex;\n                                            display: -ms-flexbox;\n                                            display: flex;\n                                            -webkit-flex-direction: column;\n                                            -ms-flex-direction: column;\n                                            flex-direction: column;\n                                            position: relative;\n                                            min-width: 0px;\n                                            word-wrap: break-word;\n                                            --card-bg: var(--chakra-colors-chakra-body-bg);\n                                            background-color: var(--card-bg);\n                                            box-shadow: var(--card-shadow);\n                                            border-radius: var(--card-radius);\n                                            color: var(--chakra-colors-chakra-body-text);\n                                            border-width: var(--card-border-width, 0);\n                                            border-color: var(--card-border-color);\n                                            --card-radius: var(--chakra-radii-md);\n                                            --card-padding: var(--chakra-space-5);\n                                            --card-shadow: var(--chakra-shadows-base);\n                                            padding: var(--chakra-space-6);\n                                            -webkit-align-items: flex-start;\n                                            -webkit-box-align: flex-start;\n                                            -ms-flex-align: flex-start;\n                                            align-items: flex-start;\n                                            -webkit-flex: 1;\n                                            -ms-flex: 1;\n                                            flex: 1;\n                                            border: 0;\n                                            background: radial-gradient(60.6% 55.06% at 50% 20.25%, rgba(232, 181, 2, 0.16) 0%, rgba(232, 181, 2, 0) 100%),rgba(255, 255, 255, 0.03);\n                                        }\n\n                                        .chakra-ui-dark .css-18tbqn:not([data-theme]),[data-theme=dark] .css-18tbqn:not([data-theme]),.css-18tbqn[data-theme=dark] {\n                                            --card-bg: var(--chakra-colors-gray-700);\n                                        }\n\n                                        @media screen and (min-width: 62em) {\n                                            .css-18tbqn {\n                                                border:4px solid rgba(255, 255, 255, 0.03);\n                                            }\n                                        }\n                                    ",
              }}
            />
            <div
              className="chakra-card css-18tbqn"
              data-sentry-element="SelectedProductContainer"
              data-sentry-component="SelectedProduct"
              data-sentry-source-file="SelectedProduct.tsx"
            >
              <style
                data-emotion="css qxzy6k"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-qxzy6k {\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                -webkit-align-items: stretch;\n                                                -webkit-box-align: stretch;\n                                                -ms-flex-align: stretch;\n                                                align-items: stretch;\n                                                -webkit-flex-direction: column;\n                                                -ms-flex-direction: column;\n                                                flex-direction: column;\n                                                gap: 0.5rem;\n                                                -webkit-flex: 1;\n                                                -ms-flex: 1;\n                                                flex: 1;\n                                                width: 100%;\n                                            }\n                                        ",
                }}
              />
              <div
                className="chakra-stack css-qxzy6k"
                data-sentry-element="VStack"
                data-sentry-source-file="SelectedProduct.tsx"
              >
                <style
                  data-emotion="css ul89fh"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-ul89fh {\n                                                    display: -webkit-box;\n                                                    display: -webkit-flex;\n                                                    display: -ms-flexbox;\n                                                    display: flex;\n                                                    width: 100%;\n                                                    height: 100%;\n                                                    -webkit-align-items: center;\n                                                    -webkit-box-align: center;\n                                                    -ms-flex-align: center;\n                                                    align-items: center;\n                                                    -webkit-box-pack: center;\n                                                    -ms-flex-pack: center;\n                                                    -webkit-justify-content: center;\n                                                    justify-content: center;\n                                                    -webkit-padding-start: var(--chakra-space-10);\n                                                    padding-inline-start:var(--chakra-space-10);-webkit-padding-end: var(--chakra-space-10);\n                                                    padding-inline-end:var(--chakra-space-10);}\n                                            ",
                  }}
                />
                <div
                  data-sentry-element="Flex"
                  data-sentry-source-file="SelectedProduct.tsx"
                  className="css-ul89fh"
                >
                  <style
                    data-emotion="css 10b93dw"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-10b93dw {\n                                                        display: -webkit-box;\n                                                        display: -webkit-flex;\n                                                        display: -ms-flexbox;\n                                                        display: flex;\n                                                        position: relative;\n                                                        width: 100%;\n                                                        height: 70%;\n                                                        -webkit-align-items: center;\n                                                        -webkit-box-align: center;\n                                                        -ms-flex-align: center;\n                                                        align-items: center;\n                                                        -webkit-box-pack: center;\n                                                        -ms-flex-pack: center;\n                                                        -webkit-justify-content: center;\n                                                        justify-content: center;\n                                                    }\n                                                ",
                    }}
                  />
                  <div
                    data-sentry-element="Flex"
                    data-sentry-source-file="SelectedProduct.tsx"
                    className="css-10b93dw"
                  >
                    <style
                      data-emotion="css 1eybg3y"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                        .css-1eybg3y {\n                                                            width: var(--chakra-sizes-48);\n                                                            height: var(--chakra-sizes-48);\n                                                            display: inline-block;\n                                                            line-height: 1em;\n                                                            -webkit-flex-shrink: 0;\n                                                            -ms-flex-negative: 0;\n                                                            flex-shrink: 0;\n                                                            color: currentColor;\n                                                            vertical-align: middle;\n                                                        }\n                                                    ",
                      }}
                    />
                    <svg
                      viewBox="0 0 45 45"
                      focusable="false"
                      className="chakra-icon css-1eybg3y"
                      data-sentry-element="Brand"
                      data-sentry-source-file="SelectedProduct.tsx"
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
                  </div>
                </div>
                <style
                  data-emotion="css 107p4i9"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-107p4i9 {\n                                                    display: -webkit-box;\n                                                    display: -webkit-flex;\n                                                    display: -ms-flexbox;\n                                                    display: flex;\n                                                    -webkit-align-items: flex-start;\n                                                    -webkit-box-align: flex-start;\n                                                    -ms-flex-align: flex-start;\n                                                    align-items: flex-start;\n                                                    -webkit-box-pack: justify;\n                                                    -webkit-justify-content: space-between;\n                                                    justify-content: space-between;\n                                                    -webkit-flex-direction: column;\n                                                    -ms-flex-direction: column;\n                                                    flex-direction: column;\n                                                    gap: 0px;\n                                                    max-width: 100%;\n                                                }\n                                            ",
                  }}
                />
                <div
                  className="chakra-stack css-107p4i9"
                  data-sentry-element="VStack"
                  data-sentry-source-file="SelectedProduct.tsx"
                >
                  <style
                    data-emotion="css 1kd0utr"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-1kd0utr {\n                                                        font-size: var(--chakra-fontSizes-sm);\n                                                        font-weight: 900;\n                                                        overflow: hidden;\n                                                        text-overflow: ellipsis;\n                                                        white-space: nowrap;\n                                                        max-width: 100%;\n                                                    }\n                                                ",
                    }}
                  />
                  <p
                    className="chakra-text css-1kd0utr"
                    data-sentry-element="Text"
                    data-sentry-source-file="SelectedProduct.tsx"
                  >
                    Select a product below to get started
                  </p>
                  <style
                    data-emotion="css 1b7szzj"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-1b7szzj {\n                                                        display: -webkit-box;\n                                                        display: -webkit-flex;\n                                                        display: -ms-flexbox;\n                                                        display: flex;\n                                                        -webkit-align-items: center;\n                                                        -webkit-box-align: center;\n                                                        -ms-flex-align: center;\n                                                        align-items: center;\n                                                        -webkit-box-pack: justify;\n                                                        -webkit-justify-content: space-between;\n                                                        justify-content: space-between;\n                                                        -webkit-flex-direction: row;\n                                                        -ms-flex-direction: row;\n                                                        flex-direction: row;\n                                                        gap: 0.5rem;\n                                                        -webkit-flex: 1;\n                                                        -ms-flex: 1;\n                                                        flex: 1;\n                                                        -webkit-align-self: stretch;\n                                                        -ms-flex-item-align: stretch;\n                                                        align-self: stretch;\n                                                    }\n                                                ",
                    }}
                  />
                  <div
                    className="chakra-stack css-1b7szzj"
                    data-sentry-element="HStack"
                    data-sentry-source-file="SelectedProduct.tsx"
                  >
                    <style
                      data-emotion="css mv3a6x"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                        .css-mv3a6x {\n                                                            font-size: var(--chakra-fontSizes-lg);\n                                                            font-weight: 900;\n                                                            color: var(--chakra-colors-gray-400);\n                                                        }\n                                                    ",
                      }}
                    />
                    <p
                      className="chakra-text css-mv3a6x"
                      data-sentry-element="Text"
                      data-sentry-source-file="SelectedProduct.tsx"
                    >
                      $0.00
                    </p>
                    <style
                      data-emotion="css ii9299"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                        .css-ii9299 {\n                                                            font-size: var(--chakra-fontSizes-lg);\n                                                            font-weight: 900;\n                                                            color: rgba(232, 181, 2, 1);\n                                                        }\n                                                    ",
                      }}
                    />
                    <p
                      className="chakra-text css-ii9299"
                      data-sentry-element="Text"
                      data-sentry-source-file="SelectedProduct.tsx"
                    >
                      x0.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style
            data-emotion="css 1wp8zie"
            dangerouslySetInnerHTML={{
              __html:
                "\n                                    .css-1wp8zie {\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-align-items: stretch;\n                                        -webkit-box-align: stretch;\n                                        -ms-flex-align: stretch;\n                                        align-items: stretch;\n                                        -webkit-flex-direction: column;\n                                        -ms-flex-direction: column;\n                                        flex-direction: column;\n                                        gap: 0.5rem;\n                                        -webkit-order: 1;\n                                        -ms-flex-order: 1;\n                                        order: 1;\n                                        position: fixed;\n                                        bottom: 0px;\n                                        left: 0px;\n                                        right: 0px;\n                                        z-index: 1;\n                                        padding-top: var(--chakra-space-6);\n                                        padding-bottom: var(--chakra-space-6);\n                                        -webkit-padding-start: var(--chakra-space-4);\n                                        padding-inline-start:var(--chakra-space-4);-webkit-padding-end: var(--chakra-space-4);\n                                        padding-inline-end:var(--chakra-space-4);background: var(--chakra-colors-blackAlpha-400);\n                                    }\n\n                                    @media screen and (min-width: 62em) {\n                                        .css-1wp8zie {\n                                            display:none;\n                                        }\n                                    }\n                                ",
            }}
          />
          <div
            className="chakra-stack css-1wp8zie"
            data-sentry-element="VStack"
            data-sentry-source-file="PageContent.tsx"
          >
            <style
              data-emotion="css 1p9ka9n"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                        .css-1p9ka9n {\n                                            display: -webkit-inline-box;\n                                            display: -webkit-inline-flex;\n                                            display: -ms-inline-flexbox;\n                                            display: inline-flex;\n                                            -webkit-appearance: none;\n                                            -moz-appearance: none;\n                                            -ms-appearance: none;\n                                            appearance: none;\n                                            -webkit-align-items: center;\n                                            -webkit-box-align: center;\n                                            -ms-flex-align: center;\n                                            align-items: center;\n                                            -webkit-box-pack: center;\n                                            -ms-flex-pack: center;\n                                            -webkit-justify-content: center;\n                                            justify-content: center;\n                                            -webkit-user-select: none;\n                                            -moz-user-select: none;\n                                            -ms-user-select: none;\n                                            user-select: none;\n                                            position: relative;\n                                            white-space: nowrap;\n                                            vertical-align: middle;\n                                            outline: 2px solid transparent;\n                                            outline-offset: 2px;\n                                            line-height: 1.2;\n                                            border-radius: 0.5rem;\n                                            font-weight: var(--chakra-fontWeights-semibold);\n                                            transition-property: var(--chakra-transition-property-common);\n                                            transition-duration: var(--chakra-transition-duration-normal);\n                                            height: var(--chakra-sizes-12);\n                                            min-width: var(--chakra-sizes-12);\n                                            font-size: var(--chakra-fontSizes-lg);\n                                            -webkit-padding-start: var(--chakra-space-6);\n                                            padding-inline-start:var(--chakra-space-6);-webkit-padding-end: var(--chakra-space-6);\n                                            padding-inline-end:var(--chakra-space-6);background: var(--chakra-colors-gray-100);\n                                            background-color: var(--chakra-colors-green-500);\n                                            color: white;\n                                        }\n\n                                        .css-1p9ka9n:focus-visible,.css-1p9ka9n[data-focus-visible] {\n                                            box-shadow: var(--chakra-shadows-outline);\n                                        }\n\n                                        .css-1p9ka9n:disabled,.css-1p9ka9n[disabled],.css-1p9ka9n[aria-disabled=true],.css-1p9ka9n[data-disabled] {\n                                            opacity: 0.4;\n                                            cursor: not-allowed;\n                                            box-shadow: var(--chakra-shadows-none);\n                                        }\n\n                                        .css-1p9ka9n:active,.css-1p9ka9n[data-active] {\n                                            background: var(--chakra-colors-gray-300);\n                                        }\n\n                                        .css-1p9ka9n:hover,.css-1p9ka9n[data-hover] {\n                                            background-color: var(--chakra-colors-green-600);\n                                        }\n                                    ",
              }}
            />
            <button
              type="button"
              className="chakra-button css-1p9ka9n"
              data-sentry-element="Button"
              data-sentry-source-file="PageContent.tsx"
              disabled
            >
              Select Product
            </button>
            <button
              type="button"
              className="chakra-button css-fpfkkm"
              data-sentry-element="Button"
              data-sentry-source-file="PageContent.tsx"
              disabled
            >
              <span className="chakra-button__icon css-1wh2kri">
                <svg
                  viewBox="0 0 17 18"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  aria-hidden="true"
                >
                  <path
                    d="M11.0484 7.65351L16.1422 2.40444C16.4549 2.08217 17.001 2.30357 17.001 2.75265V8.00171C17.001 8.27785 16.7771 8.50171 16.501 8.50171H11.4072C10.9654 8.50171 10.7407 7.97059 11.0484 7.65351Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.9554 7.06726C15.6673 6.64369 15.9162 5.71443 15.5113 4.9917C13.3794 1.18654 8.63378 -0.14786 4.89436 2.07691C1.15495 4.30168 -0.0964166 9.20398 2.0355 13.0091C4.16742 16.8143 8.91303 18.1487 12.6524 15.9239C13.3644 15.5004 13.6133 14.5711 13.2084 13.8484C12.8035 13.1257 11.898 12.8831 11.1861 13.3067C8.90694 14.6627 5.95662 13.8721 4.61371 11.4752C3.2708 9.07835 4.08155 6.05011 6.36071 4.69413C8.63988 3.33814 11.5902 4.12872 12.9331 6.52561C13.338 7.24833 14.2434 7.49084 14.9554 7.06726Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Demo Spin
            </button>
          </div>
        </div>
      </div>
      <div
        data-sentry-element="Collapse"
        data-sentry-component="MiniCartSection"
        data-sentry-source-file="MiniCartSection.tsx"
        className="chakra-collapse"
        style={{
          overflow: "hidden",
          display: "none",
          opacity: "0",
          height: "0px",
        }}
      />
      <style
        data-emotion="css cb875f"
        dangerouslySetInnerHTML={{
          __html:
            "\n                            .css-cb875f {\n                                display: -webkit-box;\n                                display: -webkit-flex;\n                                display: -ms-flexbox;\n                                display: flex;\n                                -webkit-align-items: center;\n                                -webkit-box-align: center;\n                                -ms-flex-align: center;\n                                align-items: center;\n                                -webkit-flex-direction: column;\n                                -ms-flex-direction: column;\n                                flex-direction: column;\n                                gap: var(--chakra-space-6);\n                                padding-top: var(--chakra-space-8);\n                                padding-bottom: var(--chakra-space-8);\n                                z-index: 0;\n                                position: relative;\n                            }\n                        ",
        }}
      />
      <div
        className="chakra-stack css-cb875f"
        data-sentry-element="VStack"
        data-sentry-source-file="PageContent.tsx"
      >
        <style
          data-emotion="css 1xpzzzo"
          dangerouslySetInnerHTML={{
            __html:
              "\n                                .css-1xpzzzo {\n                                    display: -webkit-box;\n                                    display: -webkit-flex;\n                                    display: -ms-flexbox;\n                                    display: flex;\n                                    -webkit-box-pack: justify;\n                                    -webkit-justify-content: space-between;\n                                    justify-content: space-between;\n                                    -webkit-flex-direction: column;\n                                    -ms-flex-direction: column;\n                                    flex-direction: column;\n                                    gap: 0.5rem;\n                                    width: var(--chakra-sizes-full);\n                                }\n\n                                @media screen and (min-width: 48em) {\n                                    .css-1xpzzzo {\n                                        -webkit-flex-direction:row;\n                                        -ms-flex-direction: row;\n                                        flex-direction: row;\n                                    }\n                                }\n                            ",
          }}
        />
        <div
          className="chakra-stack css-1xpzzzo"
          data-sentry-element="Stack"
          data-sentry-source-file="PageContent.tsx"
        >
          <style
            data-emotion="css 1rafi8n"
            dangerouslySetInnerHTML={{
              __html:
                "\n                                    .css-1rafi8n {\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-align-items: center;\n                                        -webkit-box-align: center;\n                                        -ms-flex-align: center;\n                                        align-items: center;\n                                        -webkit-flex-direction: row;\n                                        -ms-flex-direction: row;\n                                        flex-direction: row;\n                                        gap: var(--chakra-space-4);\n                                    }\n                                ",
            }}
          />
          <div
            className="chakra-stack css-1rafi8n"
            data-sentry-element="HStack"
            data-sentry-component="SearchBox"
            data-sentry-source-file="SearchBox.tsx"
          >
            <div
              className="chakra-input__group w-full lg:width-[350px] css-1y0e7gb"
              data-group="true"
              data-sentry-element="InputGroup"
              data-sentry-source-file="SearchBox.tsx"
            >
              <style
                data-emotion="css gv1iwz"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-gv1iwz {\n                                                left: 0;\n                                                width: var(--input-height);\n                                                height: var(--input-height);\n                                                font-size: var(--input-font-size);\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                -webkit-box-pack: center;\n                                                -ms-flex-pack: center;\n                                                -webkit-justify-content: center;\n                                                justify-content: center;\n                                                position: absolute;\n                                                top: 0px;\n                                                z-index: 2;\n                                                pointer-events: none;\n                                            }\n                                        ",
                }}
              />
              <div
                className="chakra-input__left-element css-gv1iwz"
                data-sentry-element="InputLeftElement"
                data-sentry-source-file="SearchBox.tsx"
              >
                <svg
                  viewBox="0 0 16 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="SearchIcon"
                  data-sentry-source-file="SearchBox.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2249 11.1723C9.21863 11.9739 7.94399 12.4529 6.55747 12.4529C3.30405 12.4529 0.666626 9.81548 0.666626 6.56205C0.666626 3.30863 3.30405 0.671204 6.55747 0.671204C9.81089 0.671204 12.4483 3.30863 12.4483 6.56205C12.4483 7.94857 11.9693 9.22321 11.1677 10.2295L14.8651 13.9269C15.1255 14.1873 15.1255 14.6094 14.8651 14.8697C14.6048 15.1301 14.1827 15.1301 13.9223 14.8697L10.2249 11.1723ZM1.99996 6.56205C1.99996 4.04501 4.04043 2.00454 6.55747 2.00454C9.07451 2.00454 11.115 4.04501 11.115 6.56205C11.115 7.78993 10.6294 8.90439 9.83981 9.72389L9.7193 9.8444C8.8998 10.634 7.78534 11.1196 6.55747 11.1196C4.04043 11.1196 1.99996 9.0791 1.99996 6.56205Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <style
                data-emotion="css dl6ire"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-dl6ire {\n                                                width: 100%;\n                                                height: var(--input-height);\n                                                font-size: var(--input-font-size);\n                                                -webkit-padding-start: var(--input-height);\n                                                padding-inline-start:var(--input-height);-webkit-padding-end: var(--input-height);\n                                                padding-inline-end:var(--input-height);min-width: 0px;\n                                                outline: 2px solid transparent;\n                                                outline-offset: 2px;\n                                                position: relative;\n                                                -webkit-appearance: none;\n                                                -moz-appearance: none;\n                                                -ms-appearance: none;\n                                                appearance: none;\n                                                transition-property: var(--chakra-transition-property-common);\n                                                transition-duration: var(--chakra-transition-duration-normal);\n                                                --input-font-size: var(--chakra-fontSizes-md);\n                                                --input-padding: var(--chakra-space-4);\n                                                --input-border-radius: var(--chakra-radii-md);\n                                                --input-height: var(--chakra-sizes-10);\n                                                border-color: inherit;\n                                                font-weight: 600;\n                                                border-radius: var(--chakra-radii-md);\n                                                border: var(--chakra-borders-none);\n                                                background: var(--chakra-colors-whiteAlpha-200);\n                                            }\n\n                                            .css-dl6ire:disabled,.css-dl6ire[disabled],.css-dl6ire[aria-disabled=true],.css-dl6ire[data-disabled] {\n                                                opacity: 0.4;\n                                                cursor: not-allowed;\n                                            }\n\n                                            .css-dl6ire:hover,.css-dl6ire[data-hover] {\n                                                border-color: var(--chakra-colors-gray-300);\n                                            }\n\n                                            .css-dl6ire[aria-readonly=true],.css-dl6ire[readonly],.css-dl6ire[data-readonly] {\n                                                box-shadow: var(--chakra-shadows-none)!important;\n                                                -webkit-user-select: all;\n                                                -moz-user-select: all;\n                                                -ms-user-select: all;\n                                                user-select: all;\n                                            }\n\n                                            .css-dl6ire[aria-invalid=true],.css-dl6ire[data-invalid] {\n                                                border-color: #E53E3E;\n                                                box-shadow: 0 0 0 1px #E53E3E;\n                                            }\n\n                                            .css-dl6ire:focus-visible,.css-dl6ire[data-focus-visible] {\n                                                z-index: 1;\n                                                border-color: #3182ce;\n                                                box-shadow: 0 0 0 1px #3182ce;\n                                            }\n\n                                            @media screen and (min-width: 48em) {\n                                                .css-dl6ire {\n                                                    border-radius:var(--chakra-radii-full);\n                                                }\n                                            }\n\n                                            .css-dl6ire:focus,.css-dl6ire[data-focus] {\n                                                outline-color: rgba(66, 153, 225, 0.6);\n                                                outline-width: 3px;\n                                                outline-style: solid;\n                                                outline-offset: 0;\n                                                box-shadow: var(--chakra-shadows-none);\n                                            }\n                                        ",
                }}
              />
              <input
                placeholder="Search"
                enterkeyhint="search"
                data-sentry-element="Input"
                data-sentry-source-file="SearchBox.tsx"
                className="chakra-input css-dl6ire"
                defaultValue
              />
              <style
                data-emotion="css 1lds0jh"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1lds0jh {\n                                                right: 0;\n                                                width: var(--input-height);\n                                                height: var(--input-height);\n                                                font-size: var(--input-font-size);\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                -webkit-box-pack: center;\n                                                -ms-flex-pack: center;\n                                                -webkit-justify-content: center;\n                                                justify-content: center;\n                                                position: absolute;\n                                                top: 0px;\n                                                z-index: 2;\n                                            }\n                                        ",
                }}
              />
              <div
                className="chakra-input__right-element css-1lds0jh"
                data-sentry-element="InputRightElement"
                data-sentry-source-file="SearchBox.tsx"
              >
                <style
                  data-emotion="css realb2 animation-b7n1on"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-realb2 {\n                                                    border-color: currentColor;\n                                                    border-style: solid;\n                                                    border-radius: 99999px;\n                                                    border-width: 3px;\n                                                    border-bottom-color: var(--chakra-colors-transparent);\n                                                    border-left-color: var(--chakra-colors-transparent);\n                                                    -webkit-animation: animation-b7n1on 0.5s linear infinite;\n                                                    animation: animation-b7n1on 0.5s linear infinite;\n                                                    width: var(--spinner-size);\n                                                    height: var(--spinner-size);\n                                                    --spinner-size: var(--chakra-sizes-4);\n                                                    display: none;\n                                                }\n\n                                                @-webkit-keyframes animation-b7n1on {\n                                                    0% {\n                                                        -webkit-transform: rotate(0deg);\n                                                        -moz-transform: rotate(0deg);\n                                                        -ms-transform: rotate(0deg);\n                                                        transform: rotate(0deg);\n                                                    }\n\n                                                    100% {\n                                                        -webkit-transform: rotate(360deg);\n                                                        -moz-transform: rotate(360deg);\n                                                        -ms-transform: rotate(360deg);\n                                                        transform: rotate(360deg);\n                                                    }\n                                                }\n\n                                                @keyframes animation-b7n1on {\n                                                    0% {\n                                                        -webkit-transform: rotate(0deg);\n                                                        -moz-transform: rotate(0deg);\n                                                        -ms-transform: rotate(0deg);\n                                                        transform: rotate(0deg);\n                                                    }\n\n                                                    100% {\n                                                        -webkit-transform: rotate(360deg);\n                                                        -moz-transform: rotate(360deg);\n                                                        -ms-transform: rotate(360deg);\n                                                        transform: rotate(360deg);\n                                                    }\n                                                }\n                                            ",
                  }}
                />
                <div
                  className="chakra-spinner css-realb2"
                  data-sentry-element="Spinner"
                  data-sentry-source-file="SearchBox.tsx"
                >
                  <style
                    data-emotion="css 8b45rq"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-8b45rq {\n                                                        border: 0px;\n                                                        clip: rect(0, 0, 0, 0);\n                                                        width: 1px;\n                                                        height: 1px;\n                                                        margin: -1px;\n                                                        padding: 0px;\n                                                        overflow: hidden;\n                                                        white-space: nowrap;\n                                                        position: absolute;\n                                                    }\n                                                ",
                    }}
                  />
                  <span className="css-8b45rq">Loading...</span>
                </div>
                <style
                  data-emotion="css 1vssawz"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-1vssawz {\n                                                    -webkit-appearance: none;\n                                                    -moz-appearance: none;\n                                                    -ms-appearance: none;\n                                                    appearance: none;\n                                                    -webkit-align-items: center;\n                                                    -webkit-box-align: center;\n                                                    -ms-flex-align: center;\n                                                    align-items: center;\n                                                    -webkit-box-pack: center;\n                                                    -ms-flex-pack: center;\n                                                    -webkit-justify-content: center;\n                                                    justify-content: center;\n                                                    -webkit-user-select: none;\n                                                    -moz-user-select: none;\n                                                    -ms-user-select: none;\n                                                    user-select: none;\n                                                    position: relative;\n                                                    white-space: nowrap;\n                                                    vertical-align: middle;\n                                                    outline: 2px solid transparent;\n                                                    outline-offset: 2px;\n                                                    line-height: inherit;\n                                                    font-weight: var(--chakra-fontWeights-semibold);\n                                                    transition-property: var(--chakra-transition-property-common);\n                                                    transition-duration: var(--chakra-transition-duration-normal);\n                                                    height: var(--chakra-sizes-8);\n                                                    min-width: var(--chakra-sizes-8);\n                                                    font-size: var(--chakra-fontSizes-sm);\n                                                    -webkit-padding-start: var(--chakra-space-3);\n                                                    padding-inline-start:var(--chakra-space-3);-webkit-padding-end: var(--chakra-space-3);\n                                                    padding-inline-end:var(--chakra-space-3);background: none;\n                                                    margin: 0px;\n                                                    padding: 0px;\n                                                    border-radius: var(--chakra-radii-full);\n                                                    color: var(--chakra-colors-gray-400);\n                                                    display: none;\n                                                }\n\n                                                .css-1vssawz:focus-visible,.css-1vssawz[data-focus-visible] {\n                                                    box-shadow: var(--chakra-shadows-outline);\n                                                }\n\n                                                .css-1vssawz:disabled,.css-1vssawz[disabled],.css-1vssawz[aria-disabled=true],.css-1vssawz[data-disabled] {\n                                                    opacity: 0.4;\n                                                    cursor: not-allowed;\n                                                    box-shadow: var(--chakra-shadows-none);\n                                                }\n\n                                                .css-1vssawz:hover,.css-1vssawz[data-hover] {\n                                                    color: var(--chakra-colors-gray-300);\n                                                }\n                                            ",
                  }}
                />
                <button
                  type="button"
                  className="chakra-button css-1vssawz"
                  aria-label="clear search"
                  data-sentry-element="IconButton"
                  data-sentry-source-file="SearchBox.tsx"
                >
                  <style
                    data-emotion="css 1pckyyl"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-1pckyyl {\n                                                        width: var(--chakra-sizes-4);\n                                                        height: var(--chakra-sizes-4);\n                                                        display: inline-block;\n                                                        line-height: 1em;\n                                                        -webkit-flex-shrink: 0;\n                                                        -ms-flex-negative: 0;\n                                                        flex-shrink: 0;\n                                                        color: currentColor;\n                                                        vertical-align: middle;\n                                                    }\n                                                ",
                    }}
                  />
                  <svg
                    viewBox="0 0 16 16"
                    focusable="false"
                    className="chakra-icon css-1pckyyl"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L8 6.58579L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711L9.41421 8L12.7071 11.2929C13.0976 11.6834 13.0976 12.3166 12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L8 9.41421L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L6.58579 8L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <style
            data-emotion="css aovc7f"
            dangerouslySetInnerHTML={{
              __html:
                "\n                                    .css-aovc7f {\n                                        width: 100%;\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        position: relative;\n                                        isolation: isolate;\n                                        --input-font-size: var(--chakra-fontSizes-md);\n                                        --input-padding: var(--chakra-space-4);\n                                        --input-border-radius: var(--chakra-radii-md);\n                                        --input-height: var(--chakra-sizes-10);\n                                        max-width: unset;\n                                    }\n\n                                    @media screen and (min-width: 48em) {\n                                        .css-aovc7f {\n                                            max-width:250px;\n                                        }\n                                    }\n                                ",
            }}
          />
          <div
            className="chakra-input__group css-aovc7f"
            data-group="true"
            data-sentry-element="InputGroup"
            data-sentry-component="MaxValueInput"
            data-sentry-source-file="MaxValueInput.tsx"
          >
            <div
              value="$350,000"
              data-sentry-element="NumberInput"
              data-sentry-source-file="MaxValueInput.tsx"
              className="chakra-numberinput css-2ziv6d"
            >
              <style
                data-emotion="css 1gefb4w"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-1gefb4w {\n                                                left: 0;\n                                                height: var(--input-height);\n                                                font-size: var(--input-font-size);\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                -webkit-box-pack: center;\n                                                -ms-flex-pack: center;\n                                                -webkit-justify-content: center;\n                                                justify-content: center;\n                                                position: absolute;\n                                                top: 0px;\n                                                z-index: 2;\n                                                width: auto;\n                                                padding-right: var(--chakra-space-4);\n                                                padding-left: var(--chakra-space-1);\n                                            }\n                                        ",
                }}
              />
              <div
                className="chakra-input__left-element css-1gefb4w"
                data-sentry-element="InputLeftElement"
                data-sentry-source-file="MaxValueInput.tsx"
              >
                <style
                  data-emotion="css xm91rv"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                .css-xm91rv {\n                                                    display: -webkit-inline-box;\n                                                    display: -webkit-inline-flex;\n                                                    display: -ms-inline-flexbox;\n                                                    display: inline-flex;\n                                                    -webkit-appearance: none;\n                                                    -moz-appearance: none;\n                                                    -ms-appearance: none;\n                                                    appearance: none;\n                                                    -webkit-align-items: center;\n                                                    -webkit-box-align: center;\n                                                    -ms-flex-align: center;\n                                                    align-items: center;\n                                                    -webkit-box-pack: center;\n                                                    -ms-flex-pack: center;\n                                                    -webkit-justify-content: center;\n                                                    justify-content: center;\n                                                    -webkit-user-select: none;\n                                                    -moz-user-select: none;\n                                                    -ms-user-select: none;\n                                                    user-select: none;\n                                                    position: relative;\n                                                    white-space: nowrap;\n                                                    vertical-align: middle;\n                                                    outline: 2px solid transparent;\n                                                    outline-offset: 2px;\n                                                    line-height: 1.2;\n                                                    font-weight: var(--chakra-fontWeights-semibold);\n                                                    transition-property: var(--chakra-transition-property-common);\n                                                    transition-duration: var(--chakra-transition-duration-normal);\n                                                    height: var(--chakra-sizes-8);\n                                                    min-width: var(--chakra-sizes-8);\n                                                    font-size: var(--chakra-fontSizes-sm);\n                                                    -webkit-padding-start: var(--chakra-space-3);\n                                                    padding-inline-start:var(--chakra-space-3);-webkit-padding-end: var(--chakra-space-3);\n                                                    padding-inline-end:var(--chakra-space-3);background: var(--chakra-colors-gray-100);\n                                                    color: var(--chakra-colors-gray-800);\n                                                    border-radius: var(--chakra-radii-full);\n                                                }\n\n                                                .css-xm91rv:focus-visible,.css-xm91rv[data-focus-visible] {\n                                                    box-shadow: var(--chakra-shadows-outline);\n                                                }\n\n                                                .css-xm91rv:disabled,.css-xm91rv[disabled],.css-xm91rv[aria-disabled=true],.css-xm91rv[data-disabled] {\n                                                    opacity: 0.4;\n                                                    cursor: not-allowed;\n                                                    box-shadow: var(--chakra-shadows-none);\n                                                }\n\n                                                .css-xm91rv:hover,.css-xm91rv[data-hover] {\n                                                    background: var(--chakra-colors-gray-200);\n                                                }\n\n                                                .css-xm91rv:hover:disabled,.css-xm91rv[data-hover]:disabled,.css-xm91rv:hover[disabled],.css-xm91rv[data-hover][disabled],.css-xm91rv:hover[aria-disabled=true],.css-xm91rv[data-hover][aria-disabled=true],.css-xm91rv:hover[data-disabled],.css-xm91rv[data-hover][data-disabled] {\n                                                    background: var(--chakra-colors-gray-100);\n                                                }\n\n                                                .css-xm91rv:active,.css-xm91rv[data-active] {\n                                                    background: var(--chakra-colors-gray-300);\n                                                }\n                                            ",
                  }}
                />
                <button
                  type="button"
                  className="chakra-button css-xm91rv"
                  data-sentry-element="Button"
                  data-sentry-source-file="MaxValueInput.tsx"
                >
                  <style
                    data-emotion="css nicbzb"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                                    .css-nicbzb {\n                                                        font-weight: 700;\n                                                        white-space: nowrap;\n                                                    }\n                                                ",
                    }}
                  />
                  <p
                    className="chakra-text css-nicbzb"
                    data-sentry-element="Text"
                    data-sentry-source-file="MaxValueInput.tsx"
                  >
                    Max Price
                  </p>
                </button>
              </div>
              <style
                data-emotion="css 15txzpl"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                                            .css-15txzpl {\n                                                width: 100%;\n                                                height: var(--input-height);\n                                                font-size: var(--input-font-size);\n                                                -webkit-padding-start: var(--input-padding);\n                                                padding-inline-start:var(--input-padding);-webkit-padding-end: var(--number-input-input-padding);\n                                                padding-inline-end:var(--number-input-input-padding);min-width: 0px;\n                                                position: relative;\n                                                -webkit-appearance: none;\n                                                -moz-appearance: none;\n                                                -ms-appearance: none;\n                                                appearance: none;\n                                                transition-property: var(--chakra-transition-property-common);\n                                                transition-duration: var(--chakra-transition-duration-normal);\n                                                --input-font-size: var(--chakra-fontSizes-md);\n                                                --input-padding: var(--chakra-space-4);\n                                                --input-border-radius: var(--chakra-radii-md);\n                                                --input-height: var(--chakra-sizes-10);\n                                                vertical-align: top;\n                                                border-color: inherit;\n                                                border-radius: var(--chakra-radii-md);\n                                                background: var(--chakra-colors-whiteAlpha-200);\n                                                font-weight: 700;\n                                                border: 0;\n                                                padding-left: 100px;\n                                                padding-right: var(--chakra-space-4);\n                                                outline: 2px solid transparent;\n                                                outline-offset: 2px;\n                                                text-align: right;\n                                            }\n\n                                            .css-15txzpl:disabled,.css-15txzpl[disabled],.css-15txzpl[aria-disabled=true],.css-15txzpl[data-disabled] {\n                                                opacity: 0.4;\n                                                cursor: not-allowed;\n                                            }\n\n                                            .css-15txzpl:hover,.css-15txzpl[data-hover] {\n                                                border-color: var(--chakra-colors-gray-300);\n                                            }\n\n                                            .css-15txzpl[aria-readonly=true],.css-15txzpl[readonly],.css-15txzpl[data-readonly] {\n                                                box-shadow: var(--chakra-shadows-none)!important;\n                                                -webkit-user-select: all;\n                                                -moz-user-select: all;\n                                                -ms-user-select: all;\n                                                user-select: all;\n                                            }\n\n                                            .css-15txzpl[aria-invalid=true],.css-15txzpl[data-invalid] {\n                                                border-color: #E53E3E;\n                                                box-shadow: 0 0 0 1px #E53E3E;\n                                            }\n\n                                            .css-15txzpl:focus-visible,.css-15txzpl[data-focus-visible] {\n                                                z-index: 1;\n                                                border-color: #3182ce;\n                                                box-shadow: 0 0 0 1px #3182ce;\n                                            }\n\n                                            @media screen and (min-width: 48em) {\n                                                .css-15txzpl {\n                                                    border-radius:var(--chakra-radii-full);\n                                                }\n                                            }\n\n                                            .css-15txzpl:focus,.css-15txzpl[data-focus] {\n                                                outline-color: rgba(66, 153, 225, 0.6);\n                                                outline-width: 3px;\n                                                outline-style: solid;\n                                                outline-offset: 0;\n                                                box-shadow: var(--chakra-shadows-none);\n                                            }\n                                        ",
                }}
              />
              <input
                inputMode="decimal"
                type="text"
                pattern="[0-9]*(.[0-9]+)?"
                data-sentry-element="NumberInputField"
                data-sentry-source-file="MaxValueInput.tsx"
                role="spinbutton"
                aria-valuemin={20}
                aria-valuemax={350000}
                aria-valuenow={350000}
                aria-valuetext="$350,000"
                autoComplete="off"
                autoCorrect="off"
                className="chakra-numberinput__field css-15txzpl"
                defaultValue="$350,000"
              />
            </div>
          </div>
        </div>
        <div
          className="flex justify-between self-stretch gap-3"
          data-sentry-component="Pagination"
          data-sentry-source-file="Pagination.tsx"
        >
          <div className="flex gap-2 items-center">
            <span className="text-sm font-bold">
              Showing 1 - 48 of 6134
            </span>
          </div>
          <div className="flex gap-2">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 h-9 px-6"
              disabled
              data-sentry-element="Button"
              data-sentry-source-file="Pagination.tsx"
            >
              Previous
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 h-9 px-6"
              data-sentry-element="Button"
              data-sentry-source-file="Pagination.tsx"
            >
              Next
            </button>
          </div>
        </div>
        <div className="self-stretch space-y-6 py-3 z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2013 Lamborghini Aventador LP 700-4"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm116v5aa0001iv3lnds01q16_4344948__96_-I19okO?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2013 Lamborghini Aventador LP 700-4
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $350,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="1999 Pokémon Base set Charizard Booster Pack Neo Destiny Jungle BIG BOX"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm6eig8640000jv0gukm80dpo_2051317__78KhUgZgx?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    1999 Pokémon Base set Charizard Booster Pack Neo
                    Destiny Jungle BIG BOX
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $349,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Patek Philippe Nautilus 5990/1R 40.5mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clx55ie8k032o11v03wvdlnov_7114577__usFzeSK0E?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Patek Philippe Nautilus 5990/1R 40.5mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $344,400.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Patek Philippe Perpetual Calendar Chronograph 40mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1bde464000010vn2fsskwm0_5065081___tfgQqdhn?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Patek Philippe Perpetual Calendar Chronograph 40mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $340,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2022 McLaren 720S"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1b54iug00005b2prkvivj5g_3795044__ag6GX5SQA?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2022 McLaren 720S
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $340,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Purple Dial White Gold 41mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1b63rmn0000o94yx3v6ipok_9931832__67NZ1crzw?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Purple Dial White Gold
                    41mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $339,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2004 Pokemon World Championships Promo Semi-Finalist Tropical Wind PSA 10 GEM MT"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm43baljv0000s33kr2pyceg1_5461723__nOZHByf_e?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2004 Pokemon World Championships Promo Semi-Finalist
                    Tropical Wind PSA 10 GEM MT
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $330,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Tourbillon 41mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1845s800002gk2p4bmvk1z0_353190__-KuxtcEqnL?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Tourbillon 41mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $325,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Iced Oak Skeleton 18k Rose Gold 41mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1cgwjv400006tezyk6jlftv_5755399__N-t7MyzL2?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Iced Oak Skeleton 18k Rose
                    Gold 41mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $320,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille RM67-02 Wayde Van Niekerk"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clx9taiw50aydqr3miic774so_6915253__Ri8Eosl6m?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille RM67-02 Wayde Van Niekerk
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $316,800.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Plum Dial Flying Tourbillion Extra-Thin (RD#3) 37mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1bd6ze10000nu3t3d1qo3i5_7879573__buf5X7cPD?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Plum Dial Flying
                    Tourbillion Extra-Thin (RD#3) 37mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $315,500.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille RM 07-01 Ladies' Rose Gold Diamond Set Jasper Dial 31mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1h17rpq000089u9pmmy5368_7908599__EClhy0kdo?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille RM 07-01 Ladies 'Rose Gold Diamond Set
                    Jasper Dial 31mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $315,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Air Jordan 1 High 'What The Doernbecher'"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clurkhvq800fpl615daicvhyn_3831482__5hhUlR5Lc?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Air Jordan 1 High 'What The Doernbecher '
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $305,678.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille RM 07-01 Carbon TPT Rose Gold"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1h1qz6f0000ds3uxux63c3o_158850__t2ru7vfUY?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille RM 07-01 Carbon TPT Rose Gold
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $305,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2023 Maserati MC20 Cielo"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1ckq0tl00008m2fzrgws8io_5006586__I5etOr4O4?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2023 Maserati MC20 Cielo
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $305,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille RM 35-02 Rafael Nadal Red TPT Quartz"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1ch3qpe00001e0drs4cjhm9_4490769__gP7tGcB7Z?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille RM 35-02 Rafael Nadal Red TPT Quartz
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $305,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Ritz-Carlton Yacht Voyage: Asia Owner's Suite Experience"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm5ii1e4z0000jp0hbuele4e7_6955184__uEZHA-Xpg?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Ritz-Carlton Yacht Voyage: Asia Owner 's Suite
                    Experience
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $305,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="3.52 Carat Diamond"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm4ywej5y0000jo0hqndkj01h_6282194__6sq75S8_r?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    3.52 Carat Diamond
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $299,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille 030 Rose Gold Factory Set"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clx9sj9li0e6avt0rujn84efn_3494765__wvEd6x0CE?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille 030 Rose Gold Factory Set
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $298,800.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille RM 07-01 Black Ceramic Black Lips Diamond Bezel 31mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1h1jf1c0000bstvv58dqyyv_9126744__kavHoi6lM?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille RM 07-01 Black Ceramic Black Lips
                    Diamond Bezel 31mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $295,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2024 Range Rover Autobiogarphy LWB"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clu8pi7xw010xld14gtecbtqp_939678__Sb_t7_ZCz?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2024 Range Rover Autobiogarphy LWB
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $294,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Rose Gold Factory Set 41mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cljq2caik0ee7oo5c9pmva73a_3030338__TQF8gG0y0?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Rose Gold Factory Set 41mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $293,250.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="1998 Pokemon Japanese Promo Bronze 3rd-2nd Tournament Trophy Pikachu #3 PSA 9"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm43coflx0000git5hdnyphuy_7486969__h-TbeRO-G?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    1998 Pokemon Japanese Promo Bronze 3rd-2nd
                    Tournament Trophy Pikachu #3 PSA 9
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $291,500.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Patek Philippe Nautilus 5740/1G 40mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clx9njepx0uzmkls5gwxqaq2u_4709058__7PfHG9j7c?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Patek Philippe Nautilus 5740/1G 40mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $290,400.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2021 Nissan GT-R NISMO Special Edition"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1chylv300015wce1d5ckj1m_4553485__qpxwYSn71?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2021 Nissan GT-R NISMO Special Edition
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $290,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2019 Lamborghini Huracán Performante"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clvx2q8je1g4k10fcvr0kbom7_5447625__QMnPrX_-p?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2019 Lamborghini Huracán Performante
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $290,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2024 Mercedes-Benz Maybach S 680"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1iur6gl00004e9ux2zzkrh7_7605444__zIk57kT6-3?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2024 Mercedes-Benz Maybach S 680
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $286,450.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2024 Porsche 911 4S"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clw57j17908sqqooff4uscpog_4677571__SNkCAWBoD?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2024 Porsche 911 4S
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $286,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2024 Mercedes G63 AMG"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clu8pnazv00zeju1308mo8713_4923122__2FSlAXlGj?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2024 Mercedes G63 AMG
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $284,400.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2022 Bentley Continental GT Speed"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1gtfsq10000uedd6s327puu_4660533__acZ4tzujtI?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2022 Bentley Continental GT Speed
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $280,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Rose Gold Blue Dial Royal Oak Perpetual Calendar	41mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clx3nk4wx0c5br66o3whlzfbo_2981397__WyGzV1mI5?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Rose Gold Blue Dial Royal
                    Oak Perpetual Calendar 41mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $279,500.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="La Panthère De Cartier Watch"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clu7kbmx4027hie14sy6qrph4_7964503__y47ruRs6n?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    La Panthère De Cartier Watch
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $275,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Rolex Daytona White Gold and Diamonds 40mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm16rt45z0000r1gwk2meiudh_6228551__3RkaGqKxe?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Rolex Daytona White Gold and Diamonds 40mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $275,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Perpetual Calendar White Ceramic"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cls6gk5iu00abjw17hvjocm55_2390569__zDzWunM4N?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Perpetual Calendar White
                    Ceramic
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $275,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2025 Lucid Air Sapphire"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm65um5kv0000jx0h4o0ot8j2_2198076__rCaI0DWT3?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2025 Lucid Air Sapphire
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $275,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2005 Exquisite Dual Numbers Michael Jordan & LeBron James PATCH AUTO /23 BGS 9"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm5x2v4tu0002mi0lx3yyquz7_306931___A3nib_4e?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2005 Exquisite Dual Numbers Michael Jordan
                    &amp;LeBron James PATCH AUTO /23 BGS 9
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $275,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Audemars Piguet Royal Oak Black Ceramic Perpetual Calendar 41mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cljq2hf9e0t3yoo5ctt3wzf60_3174027__xsi2TOMl1?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Audemars Piguet Royal Oak Black Ceramic Perpetual
                    Calendar 41mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $270,250.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2023 Audi R8 coupe V10 GT"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1cjaert0000kys1lrgw25pn_8016049__FO04f2oi1?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2023 Audi R8 coupe V10 GT
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $270,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2024 Tesla Cybertruck"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clu8pxuvt0000l814oxqivz4x_5637__TJltn866T?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2024 Tesla Cybertruck
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $270,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2019 Porsche 911 GT3 RS Coupe"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clw59kcls06pd13ifegjzpl5y_6353415__mM9tN3qGi?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2019 Porsche 911 GT3 RS Coupe
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $268,800.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="IWC Portuguese Grande Complication"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1cjgbgf0000ntbvalpym363_9146840__u300Bv4Pr?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    IWC Portuguese Grande Complication
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $265,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Indomptables De Cartier Watch"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clu7io3nc00axl715iohmsc3a_9105524__PDK3skrzp?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Indomptables De Cartier Watch
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $265,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Richard Mille RM11-02 Rose Gold Titanium"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clxdmvyhe17vxrfabaslndlqk_2631971__rp6R_lQEUC?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Richard Mille RM11-02 Rose Gold Titanium
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $264,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Hublot Big Bang Complications Tourbillon Automatic Yellow Neon Saxem 44mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1ckft9w0000yvslpf2elzdz_1816921__TrNbZRJF2?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Hublot Big Bang Complications Tourbillon Automatic
                    Yellow Neon Saxem 44mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $261,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Porsche 911 Carrera GTS 992.2"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1ck9kkb00001ga565l2smx5_5034146__qTz7mksTx?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Porsche 911 Carrera GTS 992.2
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $260,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="4.51 Carat Diamond"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm4ywihip0001jo0huovdon0x_2146957__Q-djb1EB9?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    4.51 Carat Diamond
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $258,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="2021 Bentley Betayga Speed 12cyl"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/clu8prbv500q4ld130rh183ib_7369470__sU7YLmzLJ?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    2021 Bentley Betayga Speed 12cyl
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $258,000.00
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative border rounded-lg h-40 sm:h-44 md:h-48 border-solid border-gray-700"
              data-component="ForgeProductCard"
              data-sentry-component="ForgeProductCard"
              data-sentry-source-file="ForgeProductCard.tsx"
            >
              <div
                className="absolute top-2 right-2 rounded-md bg-gray-600 hover:text-gray-300 text-gray-400 transition-opacity duration-200      ease-in-out w-7 h-7 flex items-center justify-center cursor-pointer"
                aria-label="view details"
              >
                <svg
                  viewBox="0 0 21 16"
                  focusable="false"
                  className="chakra-icon css-onkibi"
                  data-sentry-element="ViewIcon"
                  data-sentry-source-file="ForgeProductCard.tsx"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2015 15.9999C8.17738 16.0075 6.19172 15.4472 4.47046 14.3825C2.74883 13.3179 1.36052 11.7915 0.463115 9.97718C-0.15429 8.73041 -0.15429 7.26686 0.463115 6.02009C1.67464 3.59605 3.74642 1.71115 6.27399 0.733299C8.80128 -0.244433 11.6026 -0.244433 14.1295 0.733299C16.657 1.71103 18.7288 3.59601 19.9404 6.02009C20.5578 7.26686 20.5578 8.73041 19.9404 9.97718C19.043 11.7915 17.6547 13.3179 15.9331 14.3825C14.2116 15.4471 12.2259 16.0075 10.202 15.9999H10.2015ZM2.19045 6.87906C1.83288 7.58259 1.83288 8.41472 2.19045 9.11825C2.91884 10.6182 4.0588 11.8802 5.47715 12.7569C6.89566 13.6336 8.53407 14.0888 10.2014 14.0695C11.8687 14.0888 13.5072 13.6336 14.9256 12.7569C16.344 11.8802 17.4839 10.6182 18.2123 9.11825C18.5699 8.41472 18.5699 7.58259 18.2123 6.87906C17.4839 5.37911 16.344 4.11716 14.9256 3.24044C13.5071 2.36372 11.8687 1.90855 10.2014 1.92778C8.53403 1.90855 6.89562 2.36372 5.47715 3.24044C4.0588 4.11716 2.91884 5.37911 2.19045 6.87906ZM10.2005 11.859C9.1766 11.859 8.19469 11.4523 7.47064 10.7283C6.7466 10.0042 6.3399 9.02232 6.3399 7.99838C6.3399 6.97445 6.7466 5.99254 7.47064 5.2685C8.19469 4.54445 9.1766 4.13776 10.2005 4.13776C11.2245 4.13776 12.2064 4.54445 12.9304 5.2685C13.6545 5.99254 14.0612 6.97445 14.0612 7.99838C14.0612 9.02232 13.6545 10.0042 12.9304 10.7283C12.2064 11.4523 11.2245 11.859 10.2005 11.859Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                data-component="BaseProductCard"
                className="group
bg-gray-700 hover:bg-gray-650 transition-colors duration-200 ease-in-out rounded-lg overflow-hidden
w-full h-full bg-transparent flex flex-col items-center justify-between gap-1 py-1 sm:py-1.5 md:py-3 px-4
cursor-pointer
"
                data-sentry-component="BaseProductCard"
                data-sentry-source-file="BaseProductCard.tsx"
              >
                <p className="text-xxs sm:text-xs md:text-sm font-semibold text-gray-400 h-6" />
                <div className="relative flex-1 flex w-full justify-center">
                  <div
                    className="
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square transition-opacity duration-200
h-5/6 rounded-full opacity-40 group-hover:opacity-90 filter blur-[25px] bg-pack-none
"
                  />
                  <img
                    alt="Hublot Spirit of Big Bang Tourbillon Purple Sapphire 42mm"
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
                    srcSet="https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-16 16w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-32 32w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-48 48w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-64 64w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-96 96w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-128 128w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-256 256w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-384 384w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-640 640w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-750 750w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-828 828w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-1080 1080w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-1200 1200w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-1920 1920w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-2048 2048w, https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-3840 3840w"
                    src="https://ik.imagekit.io/hr727kunx/products/cm1cl9tj200003ftst5f67wv4_6963191__SEkdcUiDB?tr=w-3840"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xxs sm:text-xs md:text-sm font-semibold truncate max-w-full text-gray-400 text-center">
                    Hublot Spirit of Big Bang Tourbillon Purple Sapphire
                    42mm
                  </p>
                  <p className="text-xxs sm:text-xs md:text-base font-extrabold text-center">
                    $257,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between self-stretch gap-3"
          data-sentry-component="Pagination"
          data-sentry-source-file="Pagination.tsx"
        >
          <div className="flex gap-2 items-center">
            <span className="text-sm font-bold">
              Showing 1 - 48 of 6134
            </span>
          </div>
          <div className="flex gap-2">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 h-9 px-6"
              disabled
              data-sentry-element="Button"
              data-sentry-source-file="Pagination.tsx"
            >
              Previous
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors disabled:pointer-events-none bg-gray-600 text-base text-white font-bold hover:bg-gray-500 disabled:text-gray-400 h-9 px-6"
              data-sentry-element="Button"
              data-sentry-source-file="Pagination.tsx"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ForgeScreen;
