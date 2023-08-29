export const SearchIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z" />
        </svg>
    );
};

export const UserIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
        >
            <path d="M15 5C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15C13.6739 15 12.4021 14.4732 11.4645 13.5355C10.5268 12.5979 10 11.3261 10 10C10 8.67392 10.5268 7.40215 11.4645 6.46447C12.4021 5.52678 13.6739 5 15 5ZM15 17.5C20.525 17.5 25 19.7375 25 22.5V25H5V22.5C5 19.7375 9.475 17.5 15 17.5Z" />
        </svg>
    );
};

export const CartIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0C0.734784 0 0.48043 0.105304 0.292893 0.292747C0.105357 0.480189 0 0.734416 0 0.9995C0 1.26458 0.105357 1.51881 0.292893 1.70625C0.48043 1.8937 0.734784 1.999 1 1.999H2.074L2.234 4.07496L2.85 12.088C2.91088 12.878 3.28216 13.6118 3.8827 14.1291C4.48325 14.6464 5.26424 14.9051 6.055 14.8486L16.41 14.1089C17.1097 14.059 17.7698 13.7656 18.2755 13.2797C18.7812 12.7938 19.1005 12.1461 19.178 11.4493L19.994 4.10795C20.0095 3.96826 19.9953 3.82689 19.9524 3.69305C19.9095 3.55921 19.8388 3.43592 19.745 3.33123C19.6512 3.22653 19.5364 3.14278 19.408 3.08545C19.2796 3.02812 19.1406 2.99849 19 2.9985H4.157L3.997 0.922539C3.97761 0.67153 3.86415 0.437082 3.67932 0.266052C3.49448 0.0950217 3.25188 7.82781e-06 3 0H1ZM5 18.4908C5 18.0931 5.15804 17.7118 5.43934 17.4306C5.72064 17.1495 6.10218 16.9915 6.5 16.9915H6.51C6.90782 16.9915 7.28936 17.1495 7.57066 17.4306C7.85196 17.7118 8.01 18.0931 8.01 18.4908V18.5007C8.01 18.8984 7.85196 19.2797 7.57066 19.5609C7.28936 19.842 6.90782 20 6.51 20H6.5C6.10218 20 5.72064 19.842 5.43934 19.5609C5.15804 19.2797 5 18.8984 5 18.5007V18.4908ZM15.5 16.9915C15.1022 16.9915 14.7206 17.1495 14.4393 17.4306C14.158 17.7118 14 18.0931 14 18.4908V18.5007C14 18.8984 14.158 19.2797 14.4393 19.5609C14.7206 19.842 15.1022 20 15.5 20H15.51C15.9078 20 16.2894 19.842 16.5707 19.5609C16.852 19.2797 17.01 18.8984 17.01 18.5007V18.4908C17.01 18.0931 16.852 17.7118 16.5707 17.4306C16.2894 17.1495 15.9078 16.9915 15.51 16.9915H15.5Z"
            />
        </svg>
    );
};

export const BoltIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
        >
            <path d="M10 27.5L11.25 18.75H5L16.25 2.5H18.75L17.5 12.5H25L12.5 27.5H10Z" />
        </svg>
    );
};

export const HotIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
        >
            <path d="M22.075 14C21.7875 13.625 21.4375 13.3 21.1125 12.975C20.275 12.225 19.325 11.6875 18.525 10.9C16.6625 9.075 16.25 6.0625 17.4375 3.75C16.25 4.0375 15.2125 4.6875 14.325 5.4C11.0875 8 9.8125 12.5875 11.3375 16.525C11.3875 16.65 11.4375 16.775 11.4375 16.9375C11.4375 17.2125 11.25 17.4625 11 17.5625C10.7125 17.6875 10.4125 17.6125 10.175 17.4125C10.1036 17.3535 10.0442 17.2814 10 17.2C8.5875 15.4125 8.3625 12.85 9.3125 10.8C7.225 12.5 6.0875 15.375 6.25 18.0875C6.325 18.7125 6.4 19.3375 6.6125 19.9625C6.7875 20.7125 7.125 21.4625 7.5 22.125C8.85 24.2875 11.1875 25.8375 13.7 26.15C16.375 26.4875 19.2375 26 21.2875 24.15C23.575 22.075 24.375 18.75 23.2 15.9L23.0375 15.575C22.775 15 22.075 14 22.075 14ZM18.125 21.875C17.775 22.175 17.2 22.5 16.75 22.625C15.35 23.125 13.95 22.425 13.125 21.6C14.6125 21.25 15.5 20.15 15.7625 19.0375C15.975 18.0375 15.575 17.2125 15.4125 16.25C15.2625 15.325 15.2875 14.5375 15.625 13.675C15.8625 14.15 16.1125 14.625 16.4125 15C17.375 16.25 18.8875 16.8 19.2125 18.5C19.2625 18.675 19.2875 18.85 19.2875 19.0375C19.325 20.0625 18.875 21.1875 18.125 21.875Z" />
        </svg>
    );
};

export const FacebookIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
        </svg>
    );
};

export const InstagramIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M13.028 2.00099C13.7577 1.99819 14.4875 2.00552 15.217 2.02299L15.411 2.02999C15.635 2.03799 15.856 2.04799 16.123 2.05999C17.187 2.10999 17.913 2.27799 18.55 2.52499C19.21 2.77899 19.766 3.12299 20.322 3.67899C20.8304 4.17859 21.2238 4.78293 21.475 5.44999C21.722 6.08699 21.89 6.81399 21.94 7.87799C21.952 8.14399 21.962 8.36599 21.97 8.58999L21.976 8.78399C21.9938 9.51318 22.0014 10.2426 21.999 10.972L22 11.718V13.028C22.0025 13.7577 21.9948 14.4875 21.977 15.217L21.971 15.411C21.963 15.635 21.953 15.856 21.941 16.123C21.891 17.187 21.721 17.913 21.475 18.55C21.2246 19.2177 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2237 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.856 21.952 15.635 21.962 15.411 21.97L15.217 21.976C14.4875 21.9938 13.7577 22.0014 13.028 21.999L12.282 22H10.973C10.2433 22.0025 9.51352 21.9948 8.784 21.977L8.59 21.971C8.35261 21.9624 8.11527 21.9524 7.878 21.941C6.814 21.891 6.088 21.721 5.45 21.475C4.78268 21.2243 4.17823 20.8308 3.679 20.322C3.17004 19.8223 2.77622 19.2175 2.525 18.55C2.278 17.913 2.11 17.187 2.06 16.123C2.04886 15.8857 2.03886 15.6484 2.03 15.411L2.025 15.217C2.00656 14.4875 1.99823 13.7577 2 13.028V10.972C1.99721 10.2426 2.00454 9.51318 2.022 8.78399L2.029 8.58999C2.037 8.36599 2.047 8.14399 2.059 7.87799C2.109 6.81299 2.277 6.08799 2.524 5.44999C2.77537 4.78261 3.16996 4.17843 3.68 3.67999C4.17889 3.17074 4.78296 2.77656 5.45 2.52499C6.088 2.27799 6.813 2.10999 7.878 2.05999L8.59 2.02999L8.784 2.02499C9.51318 2.00656 10.2426 1.99823 10.972 1.99999L13.028 2.00099ZM12 7.00099C11.3375 6.99162 10.6798 7.11401 10.065 7.36105C9.45019 7.6081 8.89064 7.97486 8.41884 8.44004C7.94704 8.90522 7.5724 9.45952 7.31668 10.0707C7.06097 10.682 6.92929 11.3379 6.92929 12.0005C6.92929 12.663 7.06097 13.319 7.31668 13.9302C7.5724 14.5414 7.94704 15.0958 8.41884 15.5609C8.89064 16.0261 9.45019 16.3929 10.065 16.6399C10.6798 16.887 11.3375 17.0094 12 17C13.3261 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5978 17 13.3261 17 12C17 10.6739 16.4732 9.40213 15.5355 8.46445C14.5978 7.52677 13.3261 7.00099 12 7.00099ZM12 9.00099C12.3985 8.99364 12.7945 9.06578 13.1648 9.21319C13.5351 9.3606 13.8723 9.58033 14.1568 9.85953C14.4412 10.1387 14.6672 10.4718 14.8214 10.8393C14.9757 11.2068 15.0552 11.6014 15.0553 12C15.0553 12.3986 14.976 12.7931 14.8218 13.1607C14.6677 13.5283 14.4418 13.8614 14.1575 14.1407C13.8731 14.42 13.536 14.6399 13.1657 14.7874C12.7955 14.9349 12.3995 15.0072 12.001 15C11.2053 15 10.4423 14.6839 9.87968 14.1213C9.31707 13.5587 9.001 12.7956 9.001 12C9.001 11.2043 9.31707 10.4413 9.87968 9.87867C10.4423 9.31606 11.2053 8.99999 12.001 8.99999L12 9.00099ZM17.25 5.50099C16.9274 5.5139 16.6223 5.65114 16.3986 5.88396C16.1749 6.11678 16.05 6.42712 16.05 6.74999C16.05 7.07285 16.1749 7.38319 16.3986 7.61601C16.6223 7.84884 16.9274 7.98607 17.25 7.99899C17.5815 7.99899 17.8995 7.86729 18.1339 7.63287C18.3683 7.39845 18.5 7.08051 18.5 6.74899C18.5 6.41747 18.3683 6.09952 18.1339 5.8651C17.8995 5.63068 17.5815 5.49899 17.25 5.49899V5.50099Z" />
        </svg>
    );
};

export const YoutubeIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
        </svg>
    );
};

export const CloseIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
        </svg>
    );
};

export const EyeIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
        </svg>
    );
};

export const SlashEyeIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
        >
            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
        </svg>
    );
};

export const GiftIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M7.32727 4.08689e-05C5.60909 -0.00992423 3.93636 1.80372 4.7 4.05584H1.81818C1.33597 4.05584 0.873508 4.26582 0.532533 4.63958C0.191558 5.01334 0 5.52028 0 6.04886V8.04188C0 8.30617 0.0957789 8.55963 0.266267 8.74652C0.436754 8.9334 0.667985 9.03839 0.909091 9.03839H9.09091V6.04886H10.9091V9.03839H19.0909C19.332 9.03839 19.5632 8.9334 19.7337 8.74652C19.9042 8.55963 20 8.30617 20 8.04188V6.04886C20 5.52028 19.8084 5.01334 19.4675 4.63958C19.1265 4.26582 18.664 4.05584 18.1818 4.05584H15.3C16.3636 0.797249 12.3636 -1.50469 10.5182 1.30547L10 2.06282L9.48182 1.28554C8.90909 0.398645 8.11818 0.010006 7.32727 4.08689e-05ZM7.27273 2.06282C8.08182 2.06282 8.49091 3.13905 7.91818 3.76685C7.34545 4.39465 6.36364 3.94622 6.36364 3.05933C6.36364 2.79504 6.45942 2.54157 6.6299 2.35469C6.80039 2.16781 7.03162 2.06282 7.27273 2.06282ZM12.7273 2.06282C13.5364 2.06282 13.9455 3.13905 13.3727 3.76685C12.8 4.39465 11.8182 3.94622 11.8182 3.05933C11.8182 2.79504 11.914 2.54157 12.0844 2.35469C12.2549 2.16781 12.4862 2.06282 12.7273 2.06282ZM0.909091 10.0349V18.007C0.909091 18.5356 1.10065 19.0425 1.44162 19.4163C1.7826 19.79 2.24506 20 2.72727 20H17.2727C17.7549 20 18.2174 19.79 18.5584 19.4163C18.8994 19.0425 19.0909 18.5356 19.0909 18.007V10.0349H10.9091V18.007H9.09091V10.0349H0.909091Z" />
        </svg>
    );
};

export const ListIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
        </svg>
    );
};

export const StarIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
        </svg>
    );
};

export const FillStarIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
    );
};

export const BellIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
        </svg>
    );
};

export const AngleLeftIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
    );
};

export const AngleRightIcon = ({ className, onClick, width = '2rem', height = '2rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            viewBox="0 0 320 512"
        >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
    );
};