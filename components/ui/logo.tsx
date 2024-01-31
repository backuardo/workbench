import { SVGProps } from "react";

export const Logo: React.FC<Omit<SVGProps<SVGSVGElement>, "ref">> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={48}
			height={48}
			viewBox="0 0 512 512"
			className="fill-gray-12"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M355.275,177.212 C360.045,186.962 355.533,201.203 352.281,207.696 C352.005,208.246 351.612,208.730 351.129,209.112 C341.400,216.807 343.242,221.742 345.024,226.513 C345.876,228.797 346.758,231.159 345.988,233.641 C345.907,233.902 345.801,234.155 345.671,234.398 L345.601,234.528 C338.437,247.764 338.080,248.462 337.944,249.469 C337.729,251.066 337.361,253.082 335.465,258.557 C334.957,260.027 333.678,261.097 332.141,261.338 C326.125,262.281 324.317,268.954 322.859,276.301 C322.828,276.452 322.800,276.601 322.770,276.747 C322.876,276.925 322.971,277.112 323.052,277.306 C323.704,278.878 323.343,280.688 322.140,281.889 C320.734,283.296 318.120,285.904 315.067,283.912 C312.090,285.123 309.823,287.572 307.464,290.123 C306.759,290.883 306.072,291.625 305.386,292.316 C303.427,294.650 300.540,304.165 298.622,310.483 C296.328,318.043 294.839,322.809 293.223,325.389 C287.005,335.313 282.060,337.531 275.800,340.339 C272.196,341.955 268.113,343.786 262.562,347.670 C255.352,352.818 252.715,361.255 249.925,370.187 C247.639,377.502 245.275,385.067 240.196,391.159 C239.288,392.247 237.897,392.801 236.479,392.645 C235.068,392.480 233.836,391.616 233.200,390.347 C230.763,385.476 229.532,379.577 228.342,373.872 C225.928,362.304 224.437,358.317 220.793,358.907 C220.565,358.946 220.333,358.965 220.102,358.965 C214.526,358.965 208.980,359.289 204.772,359.571 C202.614,359.715 201.472,359.871 200.261,360.035 C199.492,360.139 198.709,360.245 197.693,360.349 C197.191,362.939 196.641,367.831 196.142,372.260 C195.468,378.250 194.703,385.042 193.588,391.953 C192.925,396.053 192.975,402.752 193.029,409.842 C193.199,432.300 193.408,460.250 174.151,462.175 C173.933,462.197 173.723,462.207 173.525,462.207 C169.547,462.208 169.030,457.980 168.323,452.236 C167.835,448.262 167.285,442.827 166.649,436.533 C164.981,420.046 162.698,397.466 159.988,387.637 C157.678,379.246 157.018,371.409 156.624,366.727 C156.566,366.026 156.503,365.284 156.441,364.630 C151.225,363.297 149.294,361.422 147.416,359.169 C146.448,358.008 145.800,357.230 143.251,356.305 C135.877,354.620 126.660,351.745 120.190,344.550 C120.130,344.485 120.073,344.416 120.017,344.346 C112.214,334.482 104.067,329.661 97.030,330.779 C91.245,331.699 86.289,336.663 83.432,344.398 C81.639,349.252 77.510,352.667 72.386,353.535 C67.385,354.377 62.487,352.573 59.290,348.693 C48.982,336.187 45.100,318.478 41.982,304.249 C39.970,295.069 38.070,286.399 35.068,282.304 C11.982,250.826 0.182,213.473 0.941,174.286 C1.830,128.381 20.433,85.110 53.324,52.443 C86.212,19.778 129.621,1.455 175.555,0.849 C195.534,0.621 215.152,3.617 233.904,9.855 C236.739,10.799 239.659,11.687 242.752,12.628 C258.142,17.307 275.584,22.612 283.642,36.230 C284.187,37.153 284.361,38.246 284.126,39.292 C280.918,53.580 295.087,62.346 318.989,71.859 C319.545,72.081 320.048,72.418 320.463,72.849 C340.734,93.879 342.842,105.125 345.284,118.149 C345.460,119.085 345.638,120.033 345.824,120.996 C360.752,135.051 359.011,162.002 355.275,177.212 ZM339.241,126.392 C338.524,125.781 338.032,124.948 337.846,124.023 C337.547,122.546 337.277,121.110 337.013,119.697 C334.756,107.658 332.967,98.120 315.027,79.334 C293.917,70.880 272.186,60.062 275.572,39.218 C268.773,29.333 254.309,24.934 240.302,20.675 C237.294,19.760 234.185,18.814 231.247,17.837 C213.388,11.894 194.690,8.979 175.667,9.260 C85.703,10.447 11.096,84.551 9.353,174.448 C8.632,211.777 19.870,247.354 41.854,277.332 C45.910,282.860 47.899,291.938 50.202,302.448 C53.280,316.491 56.769,332.406 65.785,343.346 C67.597,345.544 70.020,345.403 70.980,345.242 C73.098,344.883 74.802,343.480 75.537,341.485 C79.478,330.813 86.830,323.883 95.708,322.472 C102.876,321.338 114.036,323.282 126.531,339.019 C130.449,343.325 136.090,346.062 145.358,348.158 C145.516,348.193 145.673,348.239 145.825,348.292 C150.744,350.022 152.558,352.196 153.881,353.784 C155.015,355.144 155.763,356.042 160.647,356.940 C164.303,357.609 164.568,360.776 165.010,366.022 C165.403,370.699 165.997,377.764 168.102,385.402 C170.999,395.916 173.229,417.968 175.021,435.687 C175.637,441.781 176.311,448.434 176.842,452.538 C184.894,447.106 184.734,425.889 184.614,409.907 C184.556,402.128 184.505,395.410 185.279,390.613 C186.363,383.900 187.116,377.217 187.780,371.319 C189.453,356.466 189.902,352.476 194.611,352.164 C196.772,352.020 197.917,351.865 199.128,351.699 C200.425,351.524 201.766,351.342 204.210,351.179 C208.467,350.893 214.063,350.566 219.776,350.553 C231.693,348.857 234.408,361.752 236.579,372.154 C237.032,374.327 237.493,376.530 238.017,378.643 C239.524,375.259 240.689,371.530 241.892,367.680 C244.974,357.815 248.161,347.616 257.702,340.802 C263.941,336.437 268.606,334.345 272.355,332.664 C278.077,330.097 281.229,328.684 286.090,320.925 C287.194,319.163 288.987,313.254 290.569,308.042 C293.833,297.287 296.194,289.989 299.158,286.655 C299.213,286.594 299.269,286.533 299.328,286.475 C299.976,285.828 300.622,285.129 301.286,284.410 C304.356,281.093 308.346,276.783 314.484,275.268 C314.526,275.059 314.567,274.856 314.605,274.664 C315.871,268.290 318.144,256.835 328.244,253.634 C329.351,250.224 329.506,249.079 329.603,248.348 C329.945,245.809 329.951,245.766 337.782,231.294 C337.642,230.799 337.359,230.044 337.140,229.454 C335.161,224.155 331.509,214.369 345.143,203.132 C348.728,195.512 350.467,185.062 347.246,180.073 C346.599,179.072 346.407,177.844 346.720,176.694 C350.062,164.341 352.801,137.931 339.241,126.392 ZM291.382,210.765 C290.555,210.905 289.718,210.972 288.883,210.972 C285.458,210.972 282.072,209.818 279.383,207.858 C278.141,211.167 276.988,214.899 277.631,217.335 C277.809,218.012 278.226,218.818 278.669,219.671 C279.032,220.372 279.391,221.074 279.700,221.797 C280.374,223.377 280.508,225.021 280.628,226.472 C280.677,227.094 280.751,227.988 280.867,228.438 C281.044,228.553 281.226,228.661 281.407,228.771 C282.482,229.428 283.956,230.326 284.990,232.022 C286.312,234.195 287.101,237.848 283.361,242.931 C279.710,247.898 275.341,252.284 270.377,255.970 C270.040,256.219 269.669,256.417 269.276,256.557 C255.242,261.535 247.283,273.321 238.855,285.798 C232.434,295.306 225.794,305.137 216.191,311.856 C216.111,311.913 216.027,311.966 215.943,312.017 C208.238,316.643 201.262,312.927 195.655,309.945 C191.572,307.772 187.708,305.715 183.519,306.149 C182.440,306.825 181.162,307.974 179.920,309.091 C176.986,311.732 173.660,314.723 169.516,314.723 C163.878,314.723 159.745,311.287 155.746,307.963 C153.815,306.357 151.817,304.696 149.549,303.285 C149.399,303.193 149.257,303.090 149.120,302.980 C139.768,295.391 133.163,290.728 126.887,294.891 C125.730,295.661 124.266,295.807 122.983,295.284 C105.644,288.265 92.480,270.130 84.491,256.150 C75.170,239.843 70.201,221.208 70.087,202.220 C65.679,202.543 61.153,203.502 56.170,205.114 C53.965,205.823 51.587,204.618 50.871,202.408 C50.156,200.198 51.368,197.827 53.579,197.111 C67.951,192.461 79.528,192.527 93.540,197.343 C95.737,198.099 96.907,200.492 96.151,202.688 C95.551,204.431 93.918,205.527 92.172,205.527 C91.718,205.527 91.257,205.454 90.804,205.298 C86.463,203.805 82.446,202.845 78.505,202.393 C78.648,219.860 83.230,236.989 91.797,251.977 C98.826,264.274 110.064,280.015 124.292,286.681 C135.340,281.089 145.745,289.410 154.225,296.288 C156.883,297.968 159.135,299.839 161.128,301.497 C164.719,304.481 167.045,306.312 169.516,306.312 C170.431,306.312 172.941,304.053 174.290,302.840 C176.156,301.161 178.084,299.425 180.280,298.328 C180.655,298.140 181.057,298.010 181.470,297.941 C188.740,296.730 194.763,299.940 199.607,302.520 C205.053,305.415 208.082,306.848 211.495,304.874 C219.754,299.048 225.645,290.326 231.881,281.093 C240.589,268.198 249.591,254.870 265.842,248.855 C269.934,245.744 273.545,242.078 276.582,237.949 C277.165,237.155 277.433,236.607 277.555,236.283 C277.383,236.171 277.181,236.047 277.024,235.952 C276.509,235.638 275.998,235.318 275.526,234.960 C272.701,232.825 272.423,229.413 272.240,227.157 C272.184,226.466 272.097,225.421 271.959,225.098 C271.733,224.567 271.463,224.055 271.197,223.541 C270.592,222.376 269.907,221.054 269.492,219.478 C268.080,214.121 270.179,208.235 272.103,203.333 C269.191,202.129 266.146,201.040 261.953,204.395 C260.137,205.851 257.491,205.555 256.039,203.741 C254.586,201.927 254.880,199.281 256.694,197.829 C264.927,191.240 272.164,194.248 275.645,195.695 C276.071,195.872 276.635,196.107 276.917,196.195 C279.456,196.276 281.660,197.506 282.849,199.520 C284.226,201.852 287.616,202.872 289.985,202.472 C292.170,202.104 292.416,200.886 292.497,200.487 C292.957,198.210 295.183,196.734 297.455,197.198 C299.733,197.658 301.205,199.878 300.745,202.154 C299.822,206.716 296.321,209.934 291.382,210.765 ZM251.990,158.813 C250.534,169.094 234.315,165.069 234.583,170.906 C234.689,173.197 233.369,175.394 231.102,175.744 C223.143,176.975 220.503,161.361 219.035,159.087 C218.845,158.794 218.840,158.407 218.938,158.072 C222.943,144.399 209.849,153.146 211.819,123.847 C211.976,121.519 211.983,119.322 212.603,117.043 C213.125,115.122 213.911,113.288 214.845,111.533 C216.495,108.432 218.681,105.591 219.985,102.313 C221.655,98.116 217.994,93.522 218.922,89.346 C218.967,89.142 220.314,85.085 220.101,85.096 C221.798,82.176 222.336,83.363 224.552,80.817 C227.028,77.997 230.348,74.755 234.299,74.410 C234.649,74.380 235.000,74.374 235.351,74.397 C239.027,74.560 230.175,79.010 246.664,85.622 C249.534,86.772 252.194,90.302 252.607,93.364 C254.826,109.817 255.770,115.383 257.730,120.872 C258.486,122.987 258.763,125.257 258.514,127.490 C256.647,144.200 253.753,147.018 251.990,158.813 ZM120.985,173.297 C107.989,173.297 97.454,151.157 97.454,123.847 C97.454,96.537 107.989,74.397 120.985,74.397 C133.981,74.397 144.517,96.537 144.517,123.847 C144.517,151.157 133.981,173.297 120.985,173.297 Z"
			/>
		</svg>
	);
};
