import styles from "./MobileMenu.module.scss";
import React from "react";
import Link from "next/link";

const MobileNav: React.FC = () => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className={"mb-4"}>
        <li>
          <h3>Navigation</h3>
        </li>
        <li>
          <Link href={"/"} className={styles.link}>
            <i className={styles.icon}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6789 1.62222C15.2769 1.79152 15.69 1.48012 10.7459 5.34037C9.75609 6.1132 8.50557 7.086 7.96701 7.50219C6.48388 8.64823 6.26007 8.89169 6.08594 9.54849C5.96732 9.99581 5.97336 20.3796 6.09254 20.839C6.25492 21.4651 6.70725 22.0005 7.34295 22.3191L7.65926 22.4776L10.401 22.4938C13.4535 22.5118 13.4183 22.5155 13.8078 22.1357C14.2258 21.7281 14.2028 21.9231 14.2339 18.5254L14.2619 15.4722L14.4189 15.3367L14.5759 15.2011H16.5H18.4242L18.5812 15.3367L18.7382 15.4722L18.7662 18.5254C18.7973 21.9231 18.7743 21.7281 19.1922 22.1357C19.5818 22.5155 19.5466 22.5118 22.599 22.4938L25.3408 22.4776L25.6485 22.3285C26.2696 22.0278 26.7451 21.4651 26.9075 20.839C27.0263 20.381 27.0328 9.99373 26.9145 9.55411C26.742 8.9126 26.5373 8.68127 25.2569 7.68099C24.7183 7.2603 23.4177 6.24535 22.3666 5.42561C21.3155 4.60587 19.8426 3.45697 19.0933 2.87243C18.344 2.28795 17.5925 1.74438 17.4233 1.66453C17.1678 1.54401 17.0206 1.51676 16.556 1.50394C16.0716 1.49063 15.9538 1.50653 15.6789 1.62222ZM17.1155 2.5771C17.2386 2.64835 17.9352 3.17271 18.6635 3.74235C19.3919 4.31194 21.0758 5.62508 22.4055 6.66037C25.6079 9.15354 25.6831 9.21506 25.8598 9.4832L26.0122 9.71447V15.2062V20.698L25.8428 20.9401C25.7496 21.0732 25.5649 21.2587 25.4324 21.3523L25.1914 21.5224L22.6362 21.5386C21.2309 21.5475 20.0288 21.5417 19.9648 21.5258C19.7262 21.4667 19.7174 21.3524 19.7168 18.3029L19.7163 15.3978L19.5833 15.111C19.433 14.7868 19.2328 14.5756 18.9061 14.3966C18.6868 14.2765 18.6373 14.274 16.5 14.274C14.3627 14.274 14.3132 14.2765 14.094 14.3966C13.7673 14.5756 13.5671 14.7868 13.4167 15.111L13.2838 15.3978L13.2832 18.3261C13.2827 21.2131 13.281 21.2565 13.1654 21.404L13.0482 21.5537L10.4284 21.538L7.80866 21.5224L7.56766 21.3523C7.43511 21.2587 7.2504 21.0732 7.15724 20.9401L6.98781 20.698V15.2011V9.70425L7.15763 9.46061C7.3082 9.24462 8.04383 8.63969 9.90045 7.20518C10.3615 6.84899 10.6611 6.61514 13.8328 4.13579C14.8381 3.34993 15.7614 2.64857 15.8845 2.57727C16.2016 2.39353 16.7983 2.39342 17.1155 2.5771Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Home</span>
            <i className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </Link>
        </li>
        <li>
          <Link href={"/catalog"} className={styles.link}>
            <i className={styles.icon}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="15.59"
                  y="4.78082"
                  width="14.4383"
                  height="9.35223"
                  rx="1.93271"
                  transform="rotate(90 15.59 4.78082)"
                  stroke="black"
                  strokeWidth="0.819939"
                />
                <rect
                  x="26.7619"
                  y="4.78082"
                  width="14.4383"
                  height="9.35223"
                  rx="1.93271"
                  transform="rotate(90 26.7619 4.78082)"
                  stroke="black"
                  strokeWidth="0.819939"
                />
              </svg>
            </i>
            <span>Catalog</span>
            <i className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </Link>
        </li>
        <li>
          <Link href={"/contacts"} className={styles.link}>
            <i className={styles.icon}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1728 12.0001C18.6597 12.0001 19.8651 10.7947 19.8651 9.30779C19.8651 7.82087 18.6597 6.61548 17.1728 6.61548C15.6859 6.61548 14.4805 7.82087 14.4805 9.30779C14.4805 10.7947 15.6859 12.0001 17.1728 12.0001Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.75 6.61537H9.09615V5.26921C9.09615 4.55517 9.37981 3.87037 9.88471 3.36546C10.3896 2.86056 11.0744 2.5769 11.7885 2.5769H22.5577C23.2717 2.5769 23.9565 2.86056 24.4614 3.36546C24.9663 3.87037 25.25 4.55517 25.25 5.26921V18.7308C25.25 19.4448 24.9663 20.1296 24.4614 20.6345C23.9565 21.1394 23.2717 21.4231 22.5577 21.4231H11.7885C11.0744 21.4231 10.3896 21.1394 9.88471 20.6345C9.37981 20.1296 9.09615 19.4448 9.09615 18.7308V17.3846H7.75M7.75 12H9.09615M7.75 9.30767H9.09615M7.75 14.6923H9.09615"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.2097 16.0385V14.6923C21.2097 13.9783 20.9261 13.2935 20.4212 12.7886C19.9163 12.2837 19.2315 12 18.5174 12H15.8251C15.1111 12 14.4263 12.2837 13.9214 12.7886C13.4165 13.2935 13.1328 13.9783 13.1328 14.6923V16.0385C13.1328 16.3955 13.2746 16.7379 13.5271 16.9903C13.7795 17.2428 14.1219 17.3846 14.479 17.3846H19.8636C20.2206 17.3846 20.563 17.2428 20.8155 16.9903C21.0679 16.7379 21.2097 16.3955 21.2097 16.0385Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            <span>Catalog</span>
            <i className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </Link>
        </li>
      </ul>

      <ul className={"mb-4"}>
        <li>
          <h3>More</h3>
        </li>
        <li>
          <Link href={"/journal"} className={styles.link}>
            <i className={styles.icon}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.30117 1.53994C6.65442 1.70474 6.00356 2.25792 5.68616 2.91243L5.5 3.29624V8.35334V13.4104L5.67787 13.7947C5.90655 14.2887 6.39949 14.7932 6.8678 15.0127C7.17232 15.1554 7.35771 15.1906 7.92836 15.2143L8.61988 15.243V16.7231C8.61988 18.115 8.62754 18.211 8.74854 18.3353C9.03911 18.6339 9.11932 18.5759 10.8057 16.8479L12.3864 15.2284H14.1997H16.013L16.2244 15.4164C16.5557 15.7113 17.0788 16.0619 17.4316 16.2258C17.6091 16.3083 17.7543 16.3927 17.7541 16.4135C17.7539 16.4343 17.5441 16.562 17.2878 16.6974C16.7709 16.9702 16.0736 17.5324 15.6248 18.0379C14.7745 18.9955 14.2648 20.2439 14.1211 21.7212C14.0806 22.1376 14.0881 22.1759 14.2407 22.3327L14.4035 22.5H20.038H25.6725L25.8366 22.3314C25.9924 22.1713 25.9984 22.1387 25.9557 21.6868C25.8514 20.5835 25.423 19.349 24.8754 18.5737C24.3411 17.8174 23.4616 17.0352 22.7237 16.6603C22.5026 16.5479 22.3216 16.4362 22.3216 16.4121C22.3216 16.3879 22.4157 16.3297 22.5307 16.2825C22.8134 16.1667 23.598 15.6522 23.8212 15.4363C23.9937 15.2695 24.0431 15.2596 24.8826 15.2235C25.6483 15.1905 25.8113 15.163 26.1322 15.0127C26.6004 14.7932 27.0934 14.2887 27.3221 13.7947L27.5 13.4104V8.35334V3.29624L27.3138 2.91243C27.0695 2.40844 26.6755 2.00083 26.1717 1.73052L25.7632 1.51138L16.6287 1.50107C11.6047 1.49539 7.40731 1.5129 7.30117 1.53994ZM25.7994 2.49887C26.1905 2.70076 26.4693 3.01245 26.597 3.39064C26.7426 3.82172 26.746 12.8842 26.6008 13.3073C26.3779 13.9565 25.9336 14.2961 25.2315 14.354L24.8015 14.3895L24.9124 14.2305C25.8219 12.9265 26.1745 11.0058 25.7971 9.41104C25.5316 8.28869 25.077 7.43619 24.288 6.58131C22.3983 4.53361 19.3883 4.12746 16.9703 5.59395C16.4057 5.93645 15.4182 6.91309 15.066 7.47751C13.8961 9.35214 13.8195 11.7971 14.8702 13.7292C14.9725 13.9175 15.1025 14.1384 15.1588 14.2202L15.2613 14.369H13.6358H12.0103L10.7332 15.6709L9.45614 16.973V15.8134C9.45614 14.3283 9.52658 14.4145 8.27567 14.3687C7.42892 14.3376 7.34453 14.3227 7.06412 14.1536C6.72409 13.9485 6.53812 13.7118 6.39923 13.3073C6.25398 12.8842 6.25739 3.82172 6.40297 3.39064C6.52963 3.01569 6.82997 2.67657 7.2012 2.48949L7.49415 2.34187L16.4907 2.33976L25.4872 2.33771L25.7994 2.49887ZM21.0455 5.67083C22.9695 6.05378 24.5863 7.67523 24.9996 9.63639C25.1261 10.2367 25.1262 11.2968 24.9998 11.89C24.5535 13.9838 22.9347 15.5533 20.8469 15.9162C20.0947 16.0469 19.9813 16.0469 19.2292 15.9162C17.3486 15.5893 15.8586 14.2938 15.2066 12.4189C15.0328 11.919 15.0227 11.8303 15.0216 10.7993C15.0206 9.82069 15.0363 9.66092 15.1741 9.24577C15.6884 7.69718 16.6955 6.56068 18.0851 5.96071C18.9412 5.59104 20.0828 5.47926 21.0455 5.67083ZM19.4782 7.16145C17.6934 7.49311 16.3724 9.17154 16.4852 10.9645C16.5784 12.4469 17.4604 13.6692 18.8335 14.2187C19.2139 14.371 19.3591 14.392 20.038 14.3925C20.7421 14.393 20.8514 14.3761 21.2813 14.1995C22.2773 13.7904 23.0895 12.9236 23.4152 11.9219C23.6342 11.2485 23.6397 10.3051 23.4285 9.67546C23.0502 8.54789 22.2476 7.71337 21.1691 7.32612C20.6814 7.15107 19.9288 7.07776 19.4782 7.16145ZM20.8569 8.11986C21.4908 8.31599 22.1497 8.87108 22.4372 9.45123C22.7986 10.1802 22.8552 10.8554 22.619 11.6197C22.3467 12.5009 21.7741 13.1066 20.9206 13.4161C18.9103 14.1453 16.8651 12.2286 17.4003 10.117C17.5935 9.35465 18.0566 8.71977 18.6805 8.362C18.9677 8.19727 19.1572 8.13037 19.7164 7.99624C19.9128 7.94917 20.5167 8.01462 20.8569 8.11986ZM21.1302 16.9825C22.6181 17.3808 23.7468 18.3129 24.4417 19.7172C24.6111 20.0592 24.8671 20.9108 24.9297 21.3394L24.9737 21.6406H20.0453C15.3395 21.6406 15.117 21.6353 15.117 21.5214C15.117 21.3026 15.4216 20.2242 15.5941 19.8324C15.8391 19.276 16.2127 18.7369 16.6855 18.2574C17.2879 17.6465 18.0052 17.2382 18.92 16.9854C19.3951 16.854 20.6442 16.8524 21.1302 16.9825Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>Journal</span>
            <i className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </Link>
        </li>
        <li>
          <Link href={"/about"} className={styles.link}>
            <i className={styles.icon}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.2767 21.4783H24.2319L17.2348 18.6522C17.175 18.5942 17.1451 18.5507 17.1451 18.5217C17.0853 18.4638 17.1002 18.4058 17.1899 18.3478C17.9973 17.5942 18.401 16.6522 18.401 15.5217C18.401 14.971 18.3262 14.5217 18.1767 14.1739V14.1304L13.0634 7.47826C11.7178 8.6087 11.0899 9.73913 11.1796 10.8696C11.1796 10.9855 11.1198 11.0435 11.0002 11.0435C10.8806 11.1014 10.8208 11.058 10.8208 10.913C10.7012 9.55072 11.4637 8.24638 13.1083 7C14.6632 5.81159 16.0088 5.4058 17.1451 5.78261C17.2348 5.78261 17.2796 5.85507 17.2796 6C17.2198 6.08696 17.1301 6.11594 17.0105 6.08696C15.9938 5.7971 14.7679 6.18841 13.3326 7.26087L18.5804 14.0435C19.2382 14.4493 19.9783 14.6377 20.8006 14.6087C21.6229 14.5797 22.363 14.3478 23.0209 13.913C23.0807 13.8551 23.1405 13.8551 23.2003 13.913C23.2601 13.913 23.29 13.9565 23.29 14.0435L24.4562 21.3043C24.4562 21.3913 24.4412 21.4348 24.4113 21.4348C24.3814 21.4638 24.3365 21.4783 24.2767 21.4783ZM17.6385 18.4348L24.0525 21.0435L22.976 14.3478C21.5407 15.1594 20.1054 15.2029 18.6701 14.4783C18.7598 14.8261 18.8046 15.1739 18.8046 15.5217C18.8046 16.5652 18.4159 17.5362 17.6385 18.4348ZM9.60973 9.17391C9.49012 9.17391 9.43032 9.11594 9.43032 9C9.31071 7.63768 10.0732 6.33333 11.7178 5.08696C13.2727 3.89855 14.6183 3.49275 15.7546 3.86957C15.8443 3.89855 15.8892 3.97101 15.8892 4.08696C15.8294 4.17391 15.7397 4.21739 15.6201 4.21739C14.6034 3.86957 13.3774 4.24638 11.9421 5.34783C10.4171 6.53623 9.69944 7.73913 9.78915 8.95652C9.78915 9.07246 9.72934 9.13043 9.60973 9.13043V9.17391ZM21.8995 20.3478C22.1985 19.3623 22.8564 18.7826 23.8731 18.6087L24.2767 21.3043L21.8995 20.3478ZM13.7362 2.69565C12.4504 2.69565 11.1871 3.34783 9.94613 4.65217C8.70519 5.95652 8.3987 7.14493 9.02664 8.21739L16.876 18.3043L24.2767 21.3043L23.0209 13.4348L15.1715 3.3913C14.8725 2.92754 14.3941 2.69565 13.7362 2.69565ZM13.7362 2C14.6333 2 15.321 2.31884 15.7995 2.95652L23.6039 13C23.6936 13.087 23.7385 13.1884 23.7385 13.3043L24.9944 21.2174C25.0243 21.4783 24.9346 21.6957 24.7253 21.8696C24.5758 21.9565 24.4263 22 24.2767 22C24.1571 22 24.0674 21.9855 24.0076 21.9565L16.562 18.9565C16.4125 18.8986 16.3228 18.8261 16.2929 18.7391L8.44355 8.65217C8.44355 8.62319 8.43607 8.6087 8.42112 8.6087C8.40617 8.6087 8.3987 8.5942 8.3987 8.56522C7.80065 7.57971 7.87541 6.46377 8.62296 5.21739C9.1612 4.31884 9.93118 3.55797 10.9329 2.93478C11.9346 2.31159 12.8691 2 13.7362 2Z"
                  fill="black"
                />
              </svg>
            </i>
            <span>About US</span>
            <i className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </Link>
        </li>
        <li>
          <Link href={"/contacts"} className={styles.link}>
            <i className={styles.icon}>
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.35"
                  y="3.56436"
                  width="20.3"
                  height="14.3"
                  rx="1.79286"
                  stroke="black"
                  strokeWidth="0.7"
                />
                <rect
                  width="9"
                  height="13.7143"
                  transform="translate(12 7.07153)"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7695 7.12758C14.8228 7.26803 14.0501 7.62669 13.3385 8.25588C12.6297 8.88251 12.2227 9.55028 12.0685 10.3396L12 10.6903H12.4403H12.8806L12.9151 10.48C12.9998 9.9645 13.3891 9.28443 13.8475 8.85108C14.6599 8.08329 15.7894 7.7241 16.9671 7.85911C17.8343 7.95851 18.5 8.24738 19.0969 8.78333C19.7749 9.39207 20.0969 10.0397 20.1368 10.875C20.156 11.2755 20.143 11.391 20.0519 11.6333C19.8481 12.1745 19.462 12.6464 18.4863 13.5463C17.068 14.8545 16.6276 15.4145 16.2964 16.3307C16.1664 16.6903 16.1326 16.8699 16.1073 17.338L16.0765 17.9077H16.5024H16.9281L16.9587 17.3653C17.0341 16.031 17.4519 15.3936 19.4048 13.6334C20.3683 12.7651 20.6479 12.4141 20.8968 11.761C20.976 11.5532 21 11.3777 21 11.0074C21 9.47009 19.9904 8.09321 18.381 7.43585C17.5573 7.09937 16.6674 6.9943 15.7695 7.12758ZM16.092 20.0552V20.7858H16.5177H16.9434V20.0552V19.3246H16.5177H16.092V20.0552Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.2"
                />
              </svg>
            </i>
            <span className={"textGradient"}>How to choose a board ?</span>
            <i className={styles.arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#090A0A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href={"/help"}>
            <span>Help</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
