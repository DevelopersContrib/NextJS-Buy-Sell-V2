import Image from 'next/image'
import { faSearch, faFile, faDesktop, faArrowAltCircleRight, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Thanku() {
	return (
		<div className="col-xl-9 offset-xl-1 tw-text-center">
			<Image src="https://cdn.vnoc.com/icons/icon-thankyou-800x400.png" width={300} height={300} alt="" className="d-inline-flex img-fluid mb-3" />
			<h2 className="mb-4 tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-white">Thank you for submitting your offer.</h2>
			<div className="tw-text-zinc-400 mb-4">
				<p className="mb-2">
					<FontAwesomeIcon icon={faArrowAltCircleRight} className="tw-w-4 tw-h-4 tw-inline-flex me-2 tw-text-zinc-500" />
					You will be receiving three (3) emails from Contrib.
				</p>
				<p className="mb-4">
					<FontAwesomeIcon icon={faArrowAltCircleRight} className="tw-w-4 tw-h-4 tw-inline-flex me-2 tw-text-zinc-500" />
					Please check your spam box for safe measure.
				</p>
				<p className="tw-mb-4">
					Contrib is our contribution platform. You can check your offer submission in your <strong className="tw-text-white">&quot;My Offers Contrib App&quot;</strong>.
				</p>
				<p className="h4 tw-text-zinc-300">
					<FontAwesomeIcon icon={faEnvelope} className="tw-w-6 tw-h-6 tw-inline-flex me-2" />
					Please check your email for your Contrib access.
				</p>
			</div>
			<div
				className="tw-p-8 tw-rounded-xl tw-mb-4"
				style={{ background: "linear-gradient(0deg, rgba(255,255,255,.02), rgba(255,255,255,.02)), #0f1011", border: "1px solid rgba(255,255,255,.08)" }}
			>
				<div className="row tw-text-center">
					<div className="col-xl-12 mb-4">
						<h2 className="tw-text-xl tw-font-semibold tw-text-white">How it works</h2>
					</div>
				</div>
				<div className="row gx-xl-5">
					<div className="col-xl-4 tw-mb-4 tw-mb-xl-0">
						<div className="tw-inline-flex tw-justify-center mb-3"><FontAwesomeIcon icon={faSearch} className="tw-w-8 tw-h-8 tw-text-zinc-400" /></div>
						<h3 className="tw-text-lg tw-font-semibold tw-text-white">Step 1</h3>
						<h5 className="tw-text-base tw-font-medium tw-text-zinc-300">Browse the Marketplace</h5>
						<p className="tw-text-sm tw-text-zinc-500 tw-mb-0">Browse the marketplace and search for sites to submit offers.</p>
					</div>
					<div className="col-xl-4 tw-mb-4 tw-mb-xl-0">
						<div className="tw-inline-flex tw-justify-center mb-3"><FontAwesomeIcon icon={faFile} className="tw-w-8 tw-h-8 tw-text-zinc-400" /></div>
						<h3 className="tw-text-lg tw-font-semibold tw-text-white">Step 2</h3>
						<h5 className="tw-text-base tw-font-medium tw-text-zinc-300">Submit an Offer</h5>
						<p className="tw-text-sm tw-text-zinc-500 tw-mb-0">Click submit offer and fill up the form.</p>
					</div>
					<div className="col-xl-4">
						<div className="tw-inline-flex tw-justify-center mb-3"><FontAwesomeIcon icon={faDesktop} className="tw-w-8 tw-h-8 tw-text-zinc-400" /></div>
						<h3 className="tw-text-lg tw-font-semibold tw-text-white">Step 3</h3>
						<h5 className="tw-text-base tw-font-medium tw-text-zinc-300">View Offers</h5>
						<p className="tw-text-sm tw-text-zinc-500 tw-mb-0">View all your offer applications that you have submitted.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
