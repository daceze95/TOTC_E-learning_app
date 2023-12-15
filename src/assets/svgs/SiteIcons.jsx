import React from 'react'

export const SiteLogo = ({width=114, height=83}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 114 83'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M37.9645 4.94975C39.9171 2.99713 43.0829 2.99713 45.0355 4.94975L78.0502 37.9645C80.0029 39.9171 80.0029 43.0829 78.0503 45.0355L45.0355 78.0502C43.0829 80.0029 39.9171 80.0029 37.9645 78.0503L4.94975 45.0355C2.99713 43.0829 2.99713 39.9171 4.94975 37.9645L37.9645 4.94975Z'
        stroke='#00FFF0'
        strokeWidth='2'
      />
      <path
        d='M40.144 29.536V33.92H34.192V52H28.72V33.92H22.768V29.536H40.144ZM54.7943 52.224C52.6823 52.224 50.7409 51.7333 48.9703 50.752C47.2209 49.7707 45.8236 48.4053 44.7783 46.656C43.7543 44.8853 43.2423 42.9013 43.2423 40.704C43.2423 38.5067 43.7543 36.5333 44.7783 34.784C45.8236 33.0347 47.2209 31.6693 48.9703 30.688C50.7409 29.7067 52.6823 29.216 54.7943 29.216C56.9063 29.216 58.8369 29.7067 60.5863 30.688C62.3569 31.6693 63.7436 33.0347 64.7463 34.784C65.7703 36.5333 66.2823 38.5067 66.2823 40.704C66.2823 42.9013 65.7703 44.8853 64.7463 46.656C63.7223 48.4053 62.3356 49.7707 60.5863 50.752C58.8369 51.7333 56.9063 52.224 54.7943 52.224ZM54.7943 47.232C56.5863 47.232 58.0156 46.6347 59.0823 45.44C60.1703 44.2453 60.7143 42.6667 60.7143 40.704C60.7143 38.72 60.1703 37.1413 59.0823 35.968C58.0156 34.7733 56.5863 34.176 54.7943 34.176C52.9809 34.176 51.5303 34.7627 50.4423 35.936C49.3756 37.1093 48.8423 38.6987 48.8423 40.704C48.8423 42.688 49.3756 44.2773 50.4423 45.472C51.5303 46.6453 52.9809 47.232 54.7943 47.232ZM86.7665 29.536V33.92H80.8145V52H75.3425V33.92H69.3905V29.536H86.7665ZM89.8647 40.736C89.8647 38.5173 90.3447 36.544 91.3047 34.816C92.2647 33.0667 93.5981 31.712 95.3047 30.752C97.0327 29.7707 98.9847 29.28 101.161 29.28C103.827 29.28 106.11 29.984 108.009 31.392C109.907 32.8 111.177 34.72 111.817 37.152H105.801C105.353 36.2133 104.713 35.4987 103.881 35.008C103.07 34.5173 102.142 34.272 101.097 34.272C99.4114 34.272 98.0461 34.8587 97.0007 36.032C95.9554 37.2053 95.4327 38.7733 95.4327 40.736C95.4327 42.6987 95.9554 44.2667 97.0007 45.44C98.0461 46.6133 99.4114 47.2 101.097 47.2C102.142 47.2 103.07 46.9547 103.881 46.464C104.713 45.9733 105.353 45.2587 105.801 44.32H111.817C111.177 46.752 109.907 48.672 108.009 50.08C106.11 51.4667 103.827 52.16 101.161 52.16C98.9847 52.16 97.0327 51.68 95.3047 50.72C93.5981 49.7387 92.2647 48.384 91.3047 46.656C90.3447 44.928 89.8647 42.9547 89.8647 40.736Z'
        fill='white'
      />
    </svg>
  );
}


export function HamburgerMenu({ width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z'></path>
    </svg>
  );
}


export function CloseIcon({ width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z'></path>
    </svg>
  );
}


export function HidePassword(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        d='m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.775 0 6.725 2.087T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m.5 6.15l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2'></path>
    </svg>
  );
}


export function ShowPassword(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        d='M12 16q1.875 0 3.188-1.312T16.5 11.5q0-1.875-1.312-3.187T12 7q-1.875 0-3.187 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5q0-1.125.788-1.912T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4q3.65 0 6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6Q9.175 6 6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17'></path>
    </svg>
  );
}

export function BillingIcon(props) {
  return (
    <svg
      width='180'
      height='180'
      viewBox='0 0 180 180'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_10_959)'>
        <circle cx='90' cy='80' r='50' fill='#5B72EE' />
      </g>
      <g clip-path='url(#clip0_10_959)'>
        <path
          d='M98.75 80H82.25V85.75H98.75V80ZM106.398 66.4336L97.9852 57.6289C97.5984 57.2246 97.0742 57 96.5242 57H96V68.5H107V67.952C107 67.3859 106.785 66.8379 106.398 66.4336ZM93.25 69.2188V57H76.0625C74.9195 57 74 57.9613 74 59.1562V100.844C74 102.039 74.9195 103 76.0625 103H104.938C106.08 103 107 102.039 107 100.844V71.375H95.3125C94.1781 71.375 93.25 70.4047 93.25 69.2188ZM79.5 63.4688C79.5 63.0716 79.8077 62.75 80.1875 62.75H87.0625C87.4423 62.75 87.75 63.0716 87.75 63.4688V64.9062C87.75 65.3034 87.4423 65.625 87.0625 65.625H80.1875C79.8077 65.625 79.5 65.3034 79.5 64.9062V63.4688ZM79.5 69.2188C79.5 68.8216 79.8077 68.5 80.1875 68.5H87.0625C87.4423 68.5 87.75 68.8216 87.75 69.2188V70.6562C87.75 71.0534 87.4423 71.375 87.0625 71.375H80.1875C79.8077 71.375 79.5 71.0534 79.5 70.6562V69.2188ZM101.5 96.5312C101.5 96.9284 101.192 97.25 100.812 97.25H93.9375C93.5577 97.25 93.25 96.9284 93.25 96.5312V95.0938C93.25 94.6966 93.5577 94.375 93.9375 94.375H100.812C101.192 94.375 101.5 94.6966 101.5 95.0938V96.5312ZM101.5 78.5625V87.1875C101.5 87.9817 100.885 88.625 100.125 88.625H80.875C80.1153 88.625 79.5 87.9817 79.5 87.1875V78.5625C79.5 77.7683 80.1153 77.125 80.875 77.125H100.125C100.885 77.125 101.5 77.7683 101.5 78.5625Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_10_959'
          x='0'
          y='0'
          width='180'
          height='180'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='10' />
          <feGaussianBlur stdDeviation='20' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.212 0 0 0 0 0.238778 0 0 0 0 0.533333 0 0 0 0.06 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_10_959'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_10_959'
            result='shape'
          />
        </filter>
        <clipPath id='clip0_10_959'>
          <rect
            width='33'
            height='46'
            fill='white'
            transform='translate(74 57)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}