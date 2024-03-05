export const contentType = "image/png";
export const alt = "beneisner.io";
export const size = {
	width: 1200,
	height: 630,
};

import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

const MainOG = async () => {
	const fontBlack = readFileSync(
		join(process.cwd(), "public", "fonts", "GeistMono-Black.otf")
	);
	const fontUltraLight = readFileSync(
		join(process.cwd(), "public", "fonts", "GeistMono-UltraLight.otf")
	);
	return new ImageResponse(
		(
			<div
				tw="flex flex-col justify-center items-center h-full w-full text-[#A39073] bg-[#101211]"
				style={{
					fontFamily: "geist-mono-black",
				}}
			>
				<div tw="flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="381.75"
						height="492.75"
						viewBox="0 0 763.5 985.5"
						fill="#A39073"
						stroke="#A39073"
					>
						<path
							fill-rule="evenodd"
							stroke-width="1px"
							stroke-linecap="butt"
							stroke-linejoin="miter"
							d="M755.547,376.882 C765.698,397.629 756.098,427.932 749.176,441.749 C748.591,442.920 747.754,443.948 746.725,444.761 C726.024,461.135 729.944,471.637 733.735,481.790 C735.548,486.649 737.425,491.674 735.787,496.955 C735.615,497.512 735.388,498.050 735.111,498.566 L734.962,498.843 C719.720,527.007 718.959,528.493 718.671,530.637 C718.213,534.033 717.429,538.325 713.395,549.974 C712.314,553.103 709.592,555.378 706.322,555.891 C693.521,557.898 689.674,572.096 686.570,587.731 C686.506,588.051 686.445,588.369 686.381,588.681 C686.608,589.059 686.809,589.456 686.981,589.869 C688.369,593.214 687.602,597.065 685.040,599.622 C682.050,602.614 676.486,608.164 669.990,603.925 C663.657,606.503 658.833,611.715 653.812,617.142 C652.314,618.759 650.851,620.338 649.390,621.809 C645.223,626.776 639.079,647.022 634.999,660.466 C630.117,676.552 626.949,686.693 623.510,692.184 C610.278,713.301 599.757,718.021 586.435,723.995 C578.767,727.433 570.079,731.331 558.266,739.595 C542.925,750.549 537.314,768.502 531.377,787.507 C526.513,803.072 521.483,819.170 510.676,832.133 C508.744,834.449 505.783,835.626 502.766,835.294 C499.764,834.945 497.141,833.107 495.789,830.406 C490.604,820.041 487.984,807.489 485.451,795.349 C480.316,770.734 477.142,762.250 469.389,763.506 C468.903,763.588 468.410,763.628 467.918,763.628 C456.053,763.628 444.252,764.319 435.299,764.919 C430.706,765.225 428.275,765.557 425.699,765.906 C424.064,766.128 422.396,766.352 420.234,766.573 C419.167,772.085 417.996,782.494 416.935,791.918 C415.501,804.666 413.872,819.118 411.499,833.823 C410.089,842.548 410.196,856.802 410.310,871.889 C410.672,919.676 411.117,979.150 370.140,983.246 C369.677,983.292 369.231,983.313 368.808,983.313 C360.344,983.316 359.243,974.320 357.739,962.097 C356.701,953.640 355.530,942.075 354.177,928.683 C350.628,893.600 345.769,845.554 340.004,824.638 C335.088,806.783 333.683,790.109 332.846,780.146 C332.721,778.654 332.587,777.076 332.456,775.683 C321.358,772.846 317.248,768.858 313.252,764.062 C311.192,761.592 309.813,759.937 304.389,757.968 C288.698,754.382 269.086,748.264 255.318,732.956 C255.190,732.816 255.071,732.671 254.951,732.522 C238.347,711.533 221.012,701.273 206.037,703.653 C193.727,705.611 183.182,716.174 177.103,732.633 C173.288,742.960 164.501,750.228 153.598,752.075 C142.957,753.867 132.534,750.027 125.732,741.771 C103.798,715.160 95.538,677.479 88.902,647.200 C84.620,627.667 80.578,609.218 74.190,600.505 C25.066,533.524 -0.042,454.042 1.573,370.657 C3.464,272.977 43.049,180.902 113.037,111.392 C183.019,41.885 275.387,2.895 373.127,1.605 C415.641,1.121 457.385,7.495 497.287,20.770 C503.320,22.777 509.534,24.668 516.114,26.669 C548.861,36.626 585.977,47.915 603.123,76.892 C604.283,78.855 604.653,81.182 604.152,83.408 C597.326,113.809 627.476,132.462 678.337,152.706 C679.520,153.178 680.590,153.894 681.473,154.812 C724.607,199.560 729.093,223.492 734.289,251.204 C734.662,253.197 735.041,255.213 735.437,257.264 C767.202,287.170 763.498,344.517 755.547,376.882 ZM721.431,268.744 C719.903,267.445 718.857,265.671 718.461,263.705 C717.825,260.561 717.251,257.505 716.689,254.499 C711.885,228.881 708.079,208.585 669.905,168.611 C624.987,150.623 578.746,127.603 585.951,83.251 C571.484,62.215 540.707,52.856 510.900,43.793 C504.500,41.847 497.884,39.834 491.633,37.754 C453.631,25.108 413.846,18.906 373.366,19.503 C181.935,22.029 23.180,179.713 19.473,371.000 C17.937,450.433 41.851,526.136 88.631,589.925 C97.261,601.688 101.493,621.005 106.394,643.369 C112.943,673.249 120.367,707.114 139.553,730.393 C143.408,735.071 148.564,734.771 150.607,734.427 C155.113,733.664 158.739,730.678 160.304,726.434 C168.689,703.726 184.334,688.980 203.225,685.976 C218.477,683.564 242.224,687.701 268.812,721.187 C277.148,730.349 289.153,736.172 308.872,740.632 C309.210,740.708 309.542,740.804 309.866,740.918 C320.335,744.600 324.193,749.226 327.009,752.605 C329.422,755.498 331.013,757.409 341.406,759.320 C349.185,760.744 349.750,767.482 350.689,778.646 C351.525,788.597 352.790,803.631 357.270,819.884 C363.434,842.256 368.178,889.178 371.991,926.883 C373.302,939.849 374.736,954.007 375.867,962.740 C393.001,951.181 392.660,906.033 392.404,872.026 C392.281,855.473 392.173,841.179 393.820,830.971 C396.125,816.688 397.728,802.466 399.142,789.916 C402.700,758.312 403.656,749.820 413.677,749.156 C418.276,748.850 420.712,748.521 423.289,748.168 C426.048,747.796 428.902,747.408 434.101,747.061 C443.159,746.453 455.068,745.756 467.224,745.730 C492.583,742.121 498.360,769.559 502.979,791.693 C503.944,796.316 504.923,801.004 506.039,805.502 C509.245,798.300 511.725,790.365 514.284,782.173 C520.842,761.181 527.624,739.479 547.926,724.980 C561.201,715.693 571.128,711.242 579.105,707.664 C591.282,702.202 597.988,699.196 608.331,682.684 C610.680,678.935 614.495,666.362 617.862,655.272 C624.807,632.386 629.831,616.857 636.138,609.763 C636.255,609.632 636.374,609.504 636.500,609.379 C637.878,608.004 639.254,606.515 640.668,604.986 C647.199,597.927 655.689,588.757 668.751,585.532 C668.839,585.089 668.926,584.655 669.008,584.247 C671.701,570.684 676.539,546.310 698.030,539.499 C700.385,532.242 700.714,529.806 700.921,528.251 C701.650,522.847 701.662,522.757 718.326,491.962 C718.026,490.908 717.426,489.302 716.960,488.047 C712.748,476.770 704.978,455.947 733.989,432.036 C741.616,415.822 745.318,393.586 738.463,382.971 C737.087,380.841 736.679,378.228 737.343,375.781 C744.455,349.496 750.284,293.299 721.431,268.744 ZM619.593,448.280 C617.833,448.577 616.052,448.720 614.274,448.720 C606.986,448.720 599.782,446.265 594.059,442.093 C591.417,449.135 588.963,457.076 590.331,462.260 C590.710,463.699 591.599,465.415 592.541,467.230 C593.313,468.721 594.077,470.216 594.735,471.754 C596.169,475.116 596.455,478.614 596.709,481.702 C596.813,483.025 596.971,484.927 597.219,485.885 C597.594,486.130 597.982,486.360 598.367,486.593 C600.655,487.992 603.791,489.903 605.991,493.512 C608.803,498.135 610.482,505.907 602.526,516.724 C594.756,527.293 585.458,536.626 574.897,544.468 C574.179,544.998 573.390,545.421 572.553,545.718 C542.692,556.310 525.755,581.389 507.823,607.939 C494.160,628.171 480.030,649.090 459.597,663.388 C459.425,663.507 459.247,663.621 459.069,663.729 C442.673,673.572 427.829,665.666 415.897,659.321 C407.209,654.698 398.988,650.320 390.075,651.243 C387.778,652.682 385.059,655.126 382.416,657.503 C376.173,663.123 369.097,669.488 360.277,669.488 C348.282,669.488 339.486,662.176 330.978,655.103 C326.869,651.686 322.616,648.152 317.790,645.149 C317.473,644.954 317.169,644.735 316.878,644.499 C296.978,628.352 282.924,618.430 269.570,627.289 C267.107,628.926 263.992,629.237 261.261,628.124 C224.367,613.189 196.356,574.599 179.356,544.853 C159.522,510.153 148.949,470.500 148.707,430.096 C139.326,430.784 129.697,432.824 119.093,436.254 C114.401,437.764 109.341,435.200 107.817,430.495 C106.295,425.794 108.875,420.748 113.579,419.224 C144.160,409.331 168.796,409.471 198.612,419.720 C203.286,421.328 205.775,426.420 204.167,431.093 C202.890,434.801 199.416,437.134 195.700,437.134 C194.735,437.134 193.753,436.977 192.788,436.645 C183.553,433.470 175.004,431.427 166.619,430.465 C166.923,467.632 176.673,504.080 194.901,535.974 C209.858,562.139 233.772,595.634 264.047,609.818 C287.555,597.918 309.697,615.624 327.740,630.260 C333.397,633.834 338.189,637.817 342.429,641.344 C350.071,647.695 355.020,651.590 360.277,651.590 C362.224,651.590 367.567,646.783 370.437,644.202 C374.407,640.630 378.511,636.937 383.182,634.600 C383.981,634.201 384.835,633.925 385.715,633.779 C401.185,631.201 414.000,638.032 424.309,643.520 C435.896,649.682 442.340,652.732 449.603,648.531 C467.177,636.133 479.713,617.573 492.982,597.927 C511.512,570.488 530.667,542.129 565.247,529.329 C573.955,522.710 581.638,514.909 588.099,506.123 C589.341,504.433 589.912,503.268 590.171,502.578 C589.804,502.339 589.375,502.077 589.040,501.873 C587.944,501.206 586.858,500.524 585.852,499.764 C579.842,495.219 579.251,487.959 578.860,483.159 C578.741,481.688 578.557,479.465 578.263,478.777 C577.782,477.647 577.208,476.558 576.642,475.465 C575.354,472.986 573.897,470.172 573.014,466.819 C570.008,455.420 574.475,442.896 578.570,432.466 C572.373,429.903 565.894,427.585 556.972,434.725 C553.108,437.822 547.477,437.193 544.388,433.333 C541.296,429.473 541.922,423.842 545.781,420.754 C563.300,406.733 578.700,413.133 586.105,416.212 C587.012,416.588 588.213,417.089 588.813,417.275 C594.217,417.447 598.906,420.066 601.436,424.352 C604.365,429.313 611.578,431.483 616.620,430.632 C621.269,429.849 621.793,427.259 621.965,426.408 C622.945,421.564 627.681,418.423 632.516,419.411 C637.362,420.390 640.495,425.112 639.516,429.956 C637.552,439.663 630.102,446.512 619.593,448.280 ZM535.772,337.733 C532.673,359.608 498.161,351.043 498.733,363.465 C498.957,368.339 496.148,373.013 491.324,373.759 C474.389,376.379 468.772,343.153 465.647,338.316 C465.243,337.691 465.233,336.868 465.442,336.154 C473.964,307.061 446.101,325.674 450.293,263.329 C450.626,258.376 450.643,253.701 451.961,248.851 C453.072,244.763 454.745,240.860 456.732,237.126 C460.244,230.529 464.895,224.483 467.670,217.508 C471.223,208.576 463.432,198.803 465.407,189.916 C465.503,189.482 468.370,180.849 467.917,180.871 C471.527,174.660 472.672,177.185 477.387,171.766 C482.656,165.767 489.719,158.868 498.128,158.134 C498.872,158.069 499.620,158.057 500.365,158.107 C508.188,158.452 489.353,167.923 524.440,181.991 C530.545,184.438 536.205,191.950 537.084,198.465 C541.806,233.475 543.815,245.320 547.985,256.998 C549.593,261.499 550.183,266.330 549.653,271.080 C545.681,306.638 539.523,312.633 535.772,337.733 ZM257.011,368.552 C229.357,368.552 206.939,321.442 206.939,263.329 C206.939,205.217 229.357,158.107 257.011,158.107 C284.665,158.107 307.083,205.217 307.083,263.329 C307.083,321.442 284.665,368.552 257.011,368.552 Z"
						/>
					</svg>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "geist-mono-black",
					data: fontBlack,
					style: "normal",
					weight: 900,
				},
				{
					name: "geist-mono-ultralight",
					data: fontUltraLight,
					style: "normal",
					weight: 100,
				},
			],
		}
	);
};

export default MainOG;
