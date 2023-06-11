import React from 'react';

export function RMBadge({ styles }) {
  return (
    <div style={{
      ...styles,
    }}
    >
      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_109_2" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
          <path d="M0.15625 0.333344H61.151V61.3281H0.15625V0.333344Z" fill="white" />
        </mask>
        <g mask="url(#mask0_109_2)">
          <path d="M30.6562 0.333344C13.8333 0.333344 0.15625 14.0208 0.15625 30.8281C0.15625 47.6511 13.8333 61.3281 30.6562 61.3281C47.4635 61.3281 61.151 47.6511 61.151 30.8281C61.151 14.0208 47.4635 0.333344 30.6562 0.333344ZM30.6562 58.9479C15.151 58.9479 2.53646 46.3333 2.53646 30.8281C2.53646 15.3229 15.151 2.71355 30.6562 2.71355C46.1615 2.71355 58.7708 15.3229 58.7708 30.8281C58.7708 46.3333 46.1615 58.9479 30.6562 58.9479Z" fill="#9B4819" />
        </g>
        <path d="M30.6562 4.29688C16.0312 4.29688 4.125 16.2031 4.125 30.8281C4.125 45.4583 16.0312 57.3646 30.6562 57.3646C45.2812 57.3646 57.1875 45.4583 57.1875 30.8281C57.1875 16.2031 45.2812 4.29688 30.6562 4.29688Z" fill="#9B4819" />
        <path d="M17.4445 31.4788C17.4445 30.8954 17.507 30.2913 17.632 29.6663C17.7674 29.0309 17.9653 28.2079 18.2153 27.2079L18.5695 25.7288H21.507L21.7778 26.5204C22.6372 29.01 23.2778 30.7079 23.6945 31.6246C24.1111 32.5309 24.5903 33.1559 25.132 33.4996C25.6736 33.8329 26.4966 33.9996 27.6111 33.9996C28.0382 33.9996 28.3507 33.8538 28.5486 33.5621C28.757 33.2704 28.8611 32.9059 28.8611 32.4579C28.7049 32.4892 28.5955 32.4996 28.5278 32.4996C27.5382 32.4996 26.8611 32.4111 26.4861 32.2288C26.1216 32.0517 25.783 31.6038 25.4653 30.8954C25.158 30.1767 24.6372 28.7027 23.9028 26.4788L23.632 25.6246C25.2153 25.4319 26.533 24.9892 27.5903 24.2913C28.658 23.5986 29.1945 22.5517 29.1945 21.1454C29.1945 19.8694 28.7153 18.9163 27.757 18.2913C26.8091 17.6559 25.7257 17.2496 24.507 17.0829C23.2986 16.9059 21.9653 16.8121 20.507 16.8121H15.8403C15.783 16.8954 15.7361 16.9944 15.6945 17.1038C15.6528 17.2184 15.632 17.3277 15.632 17.4371C15.632 17.4944 15.6528 17.6194 15.6945 17.8121C16.3039 17.8434 16.8091 17.9579 17.2153 18.1663C17.6164 18.3642 17.8195 18.7288 17.8195 19.2704C17.8195 19.8121 17.4861 21.5204 16.8195 24.3954C16.1632 27.26 15.6424 29.4163 15.257 30.8746C15.132 31.3746 14.9549 31.7652 14.7361 32.0413C14.5122 32.3225 14.2361 32.5152 13.9028 32.6246C13.5695 32.7236 13.1372 32.7704 12.6111 32.7704L12.2986 33.5204L12.4236 33.7496H19.5695L19.7778 33.1871L19.6736 32.7496C19.0591 32.7496 18.533 32.6663 18.0903 32.4996C17.658 32.3329 17.4445 31.9944 17.4445 31.4788ZM21.3611 17.7913C23.0955 17.7913 24.4341 18.0517 25.382 18.5621C26.3403 19.0621 26.8195 19.8538 26.8195 20.9371C26.8195 21.76 26.6216 22.4267 26.2361 22.9371C25.8455 23.4527 25.0695 23.8538 23.9028 24.1454C22.7466 24.4371 21.0591 24.5829 18.8403 24.5829L20.3611 17.8121L21.3611 17.7913Z" fill="#F4F1E8" />
        <path d="M46.6963 39.1816C46.764 39.9732 46.9776 40.5722 47.3421 40.9732C47.4099 41.1555 47.5296 41.2805 47.6963 41.3482C47.8734 41.4055 48.1234 41.4524 48.4463 41.4941C48.6651 41.5253 48.8317 41.5514 48.9463 41.5774C49.0713 41.6087 49.1755 41.6555 49.2588 41.7232L49.238 42.3274H42.0088L41.988 41.7232L42.3421 41.5982C42.7588 41.4732 43.0817 41.3587 43.3213 41.2441C43.5713 41.1347 43.7849 40.968 43.9671 40.7441C44.1442 40.5253 44.238 40.2389 44.238 39.8899L43.5296 29.9524L39.0921 39.9524C38.8109 40.567 38.5296 41.3587 38.238 42.3274H37.3213C36.9984 41.6191 36.4724 40.5097 35.738 38.9941C34.764 36.968 33.988 35.3274 33.4046 34.0774C32.8213 32.817 32.2901 31.5878 31.8213 30.3899C31.764 31.0566 31.6651 31.9941 31.5296 33.2024C31.3734 34.6347 31.2588 35.8274 31.1755 36.7857C31.1026 37.7441 31.0713 38.6972 31.0713 39.6399C31.0713 40.0566 31.1442 40.3899 31.3005 40.6399C31.4515 40.8795 31.6442 41.0566 31.8838 41.1816C32.1182 41.3066 32.4515 41.442 32.8838 41.5774L33.2796 41.7232L33.2588 42.3274H27.6338L27.613 41.7232C27.6807 41.6972 27.889 41.6191 28.238 41.4941C28.613 41.3847 28.9046 41.2753 29.113 41.1607C29.3317 41.0357 29.5192 40.8691 29.6755 40.6607C29.8421 40.442 29.9359 40.1503 29.9671 39.7857L30.863 31.0982C30.9151 30.5462 30.9463 30.0514 30.9463 29.6191C30.9463 29.3014 30.8838 29.0462 30.7588 28.8482C30.6338 28.6555 30.4776 28.5097 30.3005 28.4107C30.1182 28.317 29.8682 28.218 29.5505 28.1191C29.2276 28.0253 28.9776 27.9264 28.8005 27.8274L28.8213 27.2232H33.3213C33.4724 27.8482 33.6234 28.4107 33.7796 28.9107C33.9463 29.4107 34.1338 29.8847 34.3421 30.3274L38.5088 39.2232L42.6546 29.7857C42.8474 29.3274 42.988 28.8795 43.0713 28.4316C43.1546 27.9889 43.1963 27.5878 43.1963 27.2232H48.0088V27.8274L47.8005 27.9107C47.3682 28.0514 47.0296 28.1816 46.7796 28.3066C46.5296 28.4316 46.3109 28.6139 46.1338 28.8482C45.9515 29.0878 45.863 29.4003 45.863 29.7857L46.6963 39.1816Z" fill="#F4F1E8" />
      </svg>
    </div>
  );
}

export default RMBadge;
