import TextButton from './common/TextButton';
import { TransitionLink } from '../contexts/PageLoaderContext';
import { useLocation } from 'react-router';

function Navbar(props:{className?:string,margin?:boolean})
{
  const location = useLocation();
  return (
    <>
      {props.margin && <div className="sm:h-28"></div>}
      <div className='fixed sm:absolute w-full bottom-0 sm:top-0 z-50 sm:z-40 bg-background border-t-2 rounded-t-3xl border-text/10 sm:bg-transparent pointer-events-none'>
        <header className={`md:container gap-4 sm:gap-0 md:mx-auto flex justify-between p-2 sm:p-8 items-center ${props.className} pointer-events-auto`}>
          <div className='w-full flex justify-end gap-4 items-center sm:gap-0 sm:justify-evenly'>
            <TransitionLink to='/'>
              <TextButton className='flex items-center gap-4' defaultActive={location.pathname=='/'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z" fill="currentColor"/>
              </svg>
                <span className='sm:block hidden'>HOME</span>
              </TextButton>
            </TransitionLink>
            <TransitionLink to='/3D'>
              <TextButton  className='flex items-center gap-4' defaultActive={location.pathname=='/3D'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.67505 19.3393L6.67505 17.1964C5.8539 16.6099 5.44333 16.3167 5.22166 15.8859C5 15.4552 5 14.9506 5 13.9415V10.0585C5 9.73711 5 9.46693 5.00716 9.234L11 13.5146V20.2313C10.6433 20.0309 10.227 19.7335 9.67505 19.3393ZM13 20.2313C13.3567 20.0309 13.773 19.7335 14.325 19.3393L17.325 17.1964C18.1461 16.6099 18.5567 16.3167 18.7783 15.8859C19 15.4552 19 14.9506 19 13.9415V10.0585C19 9.73711 19 9.46693 18.9928 9.234L13 13.5146V20.2313ZM18.1276 7.39426L12 11.7711L5.87244 7.39426C6.08372 7.2259 6.34653 7.03818 6.67505 6.80352L9.67505 4.66067C10.7977 3.85875 11.3591 3.45779 12 3.45779C12.6409 3.45779 13.2023 3.85875 14.325 4.66067L17.325 6.80352C17.6535 7.03818 17.9163 7.2259 18.1276 7.39426Z" fill="currentColor"/>
                </svg>
                <span className='sm:block hidden'>3D EXPERIENCE</span>
              </TextButton>
            </TransitionLink>
          </div>
          <a target='_blank' href="https://youtu.be/dQw4w9WgXcQ?si=ZFboFKSGhqTm5fj6" className='hidden sm:block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43" fill="none" className='hover:text-accent transition-all active:scale-95 active:text-primary sm:scale-100 scale-75'>
                <path d="M24.8606 0.153913C24.7547 0.327066 23.253 2.92435 23.0605 3.27066C22.9931 3.3909 22.7813 3.75644 22.5888 4.08831C22.4011 4.42019 22.1941 4.77612 22.1315 4.88193C22.0738 4.98777 21.939 5.2138 21.8379 5.38695C21.5347 5.89682 21.4914 5.97376 21.3373 6.25272C21.2555 6.39701 21.1737 6.55094 21.1448 6.58943C21.0534 6.73372 20.7116 7.32049 20.7116 7.33492C20.7116 7.33975 20.5672 7.59465 20.3939 7.89287C20.2159 8.19589 20.0233 8.52776 19.9656 8.63356C19.903 8.7394 19.696 9.09531 19.5083 9.42718C19.3158 9.75906 19.1088 10.115 19.0511 10.2208C18.897 10.4902 18.4061 11.3415 17.4771 12.9384C17.0391 13.6935 16.63 14.4053 16.5626 14.5256C16.4952 14.6458 16.3412 14.9103 16.2161 15.1172C16.0957 15.324 15.9946 15.5068 15.9946 15.5212C15.9946 15.5356 15.9562 15.603 15.908 15.6703C15.8551 15.7425 15.7492 15.9204 15.6722 16.0647C15.5903 16.209 15.4026 16.5457 15.2486 16.8102C15.0994 17.0748 14.9165 17.3874 14.8539 17.5076C14.7865 17.6279 14.7143 17.7433 14.6951 17.7722C14.6758 17.7962 13.9586 19.0323 13.1067 20.5138C11.2729 23.693 10.8926 24.352 10.4113 25.1793C10.3632 25.2562 10.1562 25.6169 9.95404 25.9729C9.75189 26.3288 9.54009 26.6943 9.49197 26.7761C9.27538 27.1465 8.89514 27.8102 8.76519 28.0411C8.71223 28.1325 8.46195 28.5654 8.20684 29.003C7.95656 29.4407 7.67737 29.9169 7.59557 30.0612C7.51373 30.2055 6.82543 31.3983 6.06976 32.7066C5.3141 34.0148 4.63543 35.1933 4.56323 35.3279C4.41884 35.5876 4.2648 35.8522 4.16852 36.0013C4.13484 36.0542 4.05301 36.1936 3.98565 36.3141C3.7931 36.665 3.65833 36.8912 3.43211 37.2758C3.08556 37.858 3.05668 37.9107 2.90266 38.1899C2.82083 38.3342 2.73419 38.4878 2.71013 38.5264C2.66199 38.5986 2.44059 38.9835 2.25287 39.3201C2.1903 39.4257 1.78117 40.1378 1.33354 40.9073C0.890723 41.672 0.471973 42.3982 0.404588 42.5187C0.337202 42.6388 0.265004 42.7398 0.245751 42.7496C0.226498 42.7589 0.207245 42.8217 0.207245 42.8841V42.9995H11.0515L21.8909 42.9949L22.1075 42.6053C22.2278 42.3888 22.5695 41.7922 22.8679 41.2778C23.1616 40.763 23.407 40.3398 23.407 40.3301C23.407 40.3204 23.4937 40.1714 23.6044 39.9935C23.7103 39.8153 23.8402 39.5989 23.8884 39.5174C24.0664 39.2046 24.5285 38.4013 24.6248 38.2378C24.6777 38.1466 24.774 37.9734 24.8414 37.858C24.9088 37.7375 25.0243 37.5308 25.1061 37.4009C25.2457 37.1654 25.3227 37.0258 25.5152 36.6842C25.9532 35.9195 27.3298 33.5339 27.4694 33.3078C27.6668 32.9808 27.6764 32.8846 27.556 32.6825C27.5079 32.6008 27.402 32.418 27.3202 32.2737C27.2384 32.1294 26.9399 31.61 26.656 31.1194C26.3672 30.6288 26.0976 30.1622 26.0543 30.0853C25.8618 29.7486 25.4093 28.9646 25.3179 28.8107C25.2649 28.7193 25.1494 28.5124 25.058 28.3537C24.9665 28.195 24.8751 28.0315 24.851 27.993C24.7307 27.7958 24.4323 27.2763 24.3504 27.1176C24.1916 26.8194 24.0905 26.7136 24.0328 26.7713C23.9894 26.8146 23.3878 27.8391 22.5407 29.3157C22.4588 29.46 21.9727 30.2969 21.8187 30.5662C21.7705 30.6432 21.6117 30.927 21.4577 31.1915C21.3084 31.456 21.1689 31.6917 21.1496 31.7206C21.1256 31.7446 21.0437 31.8889 20.9667 32.0332C20.8849 32.1775 20.779 32.3747 20.7261 32.4661C20.6731 32.5575 20.548 32.7739 20.4469 32.9471C20.3458 33.1202 20.2303 33.3222 20.1822 33.404C20.0618 33.6108 19.5661 34.4718 19.4217 34.7267C19.3543 34.8469 19.2532 35.0201 19.2003 35.1115C19.1425 35.2029 19.0703 35.3327 19.0366 35.4001C19.0029 35.4674 18.8393 35.7464 18.6756 36.0254L18.3724 36.5305L14.825 36.5449C12.6495 36.5496 11.2777 36.5399 11.2777 36.511C11.2777 36.4872 11.5087 36.0686 11.7879 35.5828C12.0719 35.097 12.3558 34.6064 12.4232 34.4862C12.4906 34.366 12.6254 34.1303 12.7313 33.962C12.8323 33.7984 12.9142 33.6493 12.9142 33.6397C12.9142 33.6301 12.9816 33.5098 13.0634 33.3704C13.1982 33.1443 13.8046 32.1006 14.0212 31.7206C14.1993 31.4128 14.8491 30.2825 15.3401 29.4407C15.6192 28.955 15.8502 28.5557 15.8502 28.5461C15.8502 28.5365 15.9321 28.3922 16.0332 28.2287C16.139 28.0603 16.2738 27.8246 16.3412 27.7044C16.5385 27.3533 16.6444 27.1705 16.8803 26.7761C17.0006 26.5693 17.1017 26.3865 17.1017 26.3769C17.1017 26.3673 17.1883 26.2134 17.2942 26.0402C17.4001 25.8671 17.4868 25.7179 17.4868 25.7084C17.4868 25.7035 17.6937 25.3428 17.9488 24.9099C18.2039 24.477 18.4687 24.0249 18.536 23.9047C18.6034 23.7844 19.3013 22.5723 20.0859 21.2112C20.8705 19.85 21.5732 18.6235 21.6454 18.4937C21.7224 18.359 21.7994 18.2291 21.8187 18.2051C21.8379 18.1762 21.9005 18.08 21.9534 17.9886C22.0545 17.8059 22.5455 16.9593 22.6899 16.6996C22.8343 16.4543 22.9787 16.2042 23.1086 15.9733C23.176 15.8531 23.2915 15.6462 23.3733 15.5164C23.5562 15.2086 23.614 15.1028 23.9846 14.4534C24.5911 13.3905 24.9569 12.7941 25.0002 12.7941C25.0243 12.7941 25.0628 12.8325 25.0772 12.8758C25.1061 12.9479 25.3949 13.453 25.5248 13.6598C25.5537 13.6983 25.6356 13.8522 25.7174 13.9965C25.8714 14.2755 25.9147 14.3524 26.2179 14.8623C26.4297 15.2134 26.5116 15.3577 26.8004 15.8723C26.9111 16.0695 27.6475 17.3489 28.4369 18.7101C29.2262 20.0713 29.9145 21.2641 29.9675 21.3555C30.3621 22.0577 30.5114 22.3078 30.5787 22.4136C30.6221 22.481 30.7231 22.6541 30.805 22.7984C31.0504 23.2457 31.2141 23.5391 31.3248 23.7123C31.3826 23.8037 31.4836 23.9768 31.551 24.0971C31.6184 24.2173 31.8398 24.6069 32.0468 24.9628C32.2537 25.3188 32.5522 25.8382 32.711 26.1172C32.865 26.3961 33.0576 26.7184 33.1298 26.8386C33.2405 27.0214 35.4642 30.8741 35.7626 31.408C35.8155 31.4993 35.9696 31.7591 36.0995 31.9851C36.2343 32.2112 36.3931 32.4902 36.4606 32.6104C36.5278 32.7306 36.6289 32.9086 36.6866 33.0048C36.7397 33.1058 36.8361 33.2693 36.8888 33.3655C36.9465 33.4665 37.0332 33.606 37.0815 33.6782C37.1343 33.7455 37.1729 33.8177 37.1729 33.8369C37.1729 33.8561 37.2115 33.9283 37.2595 33.9956C37.3126 34.0678 37.4137 34.2457 37.4906 34.39C37.5628 34.5343 37.6638 34.7074 37.7071 34.7748C37.7505 34.8421 37.8371 34.9816 37.8949 35.0874C37.9573 35.1933 38.0537 35.3664 38.1115 35.4722C38.1739 35.578 38.3327 35.857 38.4678 36.0879C38.6024 36.3234 38.7132 36.5208 38.7132 36.5352C38.7132 36.5449 37.3942 36.5543 35.777 36.5543C33.0142 36.5543 32.841 36.5594 32.841 36.6362C32.841 36.6842 32.8843 36.7758 32.9372 36.8429C32.9902 36.9103 33.0335 36.9778 33.0335 37.0016C33.0335 37.0211 33.1298 37.1942 33.2453 37.3865C33.356 37.5741 33.9384 38.5744 34.5352 39.6086C35.7097 41.6479 35.7578 41.7298 36.1862 42.4848L36.4751 42.9995H43.1318C50.4383 42.9995 49.904 43.0237 49.6921 42.7207C49.639 42.6485 49.1387 41.7875 48.5755 40.811C48.0171 39.8298 47.3337 38.6516 47.0641 38.1899C46.7944 37.7281 46.5201 37.252 46.4529 37.1315C46.3854 37.0114 46.193 36.6748 46.0197 36.3862C45.8511 36.0926 45.6443 35.7368 45.5623 35.5925C45.3891 35.2798 44.797 34.2553 44.7295 34.1495C44.7057 34.111 44.6191 33.9571 44.5371 33.8128C44.383 33.5339 44.3397 33.4569 44.0364 32.9471C43.9354 32.7739 43.796 32.5382 43.7285 32.418C43.6321 32.24 40.5951 26.9829 40.3016 26.4779C40.2532 26.3961 40.0464 26.0402 39.8442 25.6843C39.6421 25.3284 39.4302 24.9628 39.3822 24.8762C39.3291 24.7945 39.2522 24.6502 39.1991 24.5636C39.1511 24.4819 39.0453 24.2991 38.9681 24.1644C38.8865 24.0345 38.771 23.8277 38.7035 23.7075C38.636 23.592 38.3714 23.1255 38.1115 22.6782C37.8562 22.226 37.5869 21.7643 37.5194 21.6441C37.4519 21.5238 37.3173 21.2881 37.2115 21.1198C37.1104 20.9563 37.0285 20.8072 37.0285 20.7975C37.0285 20.7879 36.9321 20.6196 36.8166 20.4272C36.6433 20.1386 34.8 16.9497 34.4919 16.4014C34.3283 16.1128 34.0924 15.7088 34.0443 15.6318C34.0202 15.5934 33.9287 15.4298 33.8373 15.2711C33.7459 15.1124 33.6255 14.9007 33.5678 14.7997C33.5148 14.7035 33.4234 14.5448 33.3704 14.4486C33.3175 14.3572 33.2356 14.2226 33.1923 14.1552C33.1009 14.0157 32.995 13.833 32.7928 13.4674C32.711 13.3231 32.6051 13.1355 32.557 13.0586C32.4703 12.9143 32.35 12.7123 32.1623 12.3708C31.8783 11.8657 30.006 8.63356 29.8279 8.33538C29.7124 8.14297 29.6161 7.97465 29.6161 7.96502C29.6161 7.95538 29.5343 7.80629 29.4332 7.64277C29.3273 7.47442 29.1877 7.23392 29.1203 7.10888C29.053 6.98382 28.8027 6.55094 28.5668 6.14691C28.331 5.74289 28.0855 5.31481 28.0181 5.19458C27.9122 5.00699 27.5079 4.30475 27.2576 3.87187C27.2143 3.79013 27.0747 3.55925 26.9496 3.35242C26.8293 3.1456 26.7282 2.96283 26.7282 2.95321C26.7282 2.94359 26.6415 2.78968 26.5356 2.61653C26.4297 2.44337 26.3431 2.28946 26.3431 2.27503C26.3431 2.26541 26.2805 2.16441 26.2035 2.05378C26.1313 1.94316 26.0591 1.82772 26.0495 1.79886C26.0014 1.66419 25.0195 0 24.9906 0C24.9713 0 24.9136 0.0721468 24.8606 0.153913Z" fill="currentColor"/>
                <path d="M28.9134 36.9969C28.7882 37.218 28.5765 37.5788 28.4465 37.805C28.3117 38.0311 28.1673 38.2858 28.1192 38.3677C28.0662 38.4543 27.9892 38.5986 27.9363 38.6805C27.8881 38.767 27.7245 39.0556 27.5705 39.32C27.2143 39.9405 27.171 40.0173 26.9014 40.4647C26.7811 40.6717 26.68 40.8542 26.68 40.864C26.68 40.8737 26.5934 41.0274 26.4875 41.2006C26.3816 41.3737 26.295 41.523 26.295 41.5324C26.295 41.5375 26.1506 41.7922 25.9725 42.0905C25.5682 42.7928 25.5248 42.865 25.5248 42.9371C25.5248 42.9851 26.2805 42.9995 29.154 42.9995C32.3211 42.9995 32.788 42.9898 32.8121 42.9274C32.8265 42.8888 32.7254 42.6677 32.5907 42.4368C32.0612 41.518 31.8109 41.0902 30.9301 39.5607C30.0782 38.0889 29.8808 37.7426 29.7412 37.4922C29.4621 36.9922 29.2166 36.6026 29.1829 36.6026C29.1588 36.6026 29.0385 36.7805 28.9134 36.9969Z" fill="currentColor"/>
            </svg>
          </a>
          <div className='w-full flex justify-start gap-4 items-center sm:gap-0 sm:justify-evenly'>
            <TransitionLink to='/mywork'>
              <TextButton  className='flex items-center gap-4' defaultActive={location.pathname=='/mywork'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                  <path d="M3.45067 10.9082L10.4033 17.4395C10.6428 17.6644 10.7625 17.7769 10.9037 17.8046C10.9673 17.8171 11.0327 17.8171 11.0963 17.8046C11.2375 17.7769 11.3572 17.6644 11.5967 17.4395L18.5493 10.9082C20.5055 9.07059 20.743 6.0466 19.0978 3.92607L18.7885 3.52734C16.8203 0.99058 12.8696 1.41601 11.4867 4.31365C11.2913 4.72296 10.7087 4.72296 10.5133 4.31365C9.13037 1.41601 5.17972 0.990584 3.21154 3.52735L2.90219 3.92607C1.25695 6.0466 1.4945 9.07059 3.45067 10.9082Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className='sm:block hidden'>MY WORK</span>
              </TextButton>
            </TransitionLink>
            <TransitionLink to='/contact'>
              <TextButton className='flex items-center gap-4' defaultActive={location.pathname=='/contact'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.5936 17.6577C16.5314 18.2177 16.4102 18.7695 16.232 19.304L16 20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className='sm:block hidden'>CONTACT</span>
              </TextButton>
            </TransitionLink>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar;