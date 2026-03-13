import Image from 'next/image'

export default function Thanku({domain,emailCode}) {
    return (
        <div className="col-xl-6 offset-xl-3 tw-text-center page-form-theme">
            <Image src="https://cdn.vnoc.com/background/contrib/handshake.png" width={150} height={150} alt="" className="d-inline-flex img-fluid mb-3" />
            <h2 className="mb-4 tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-white">Thank you for your Partnership Application!</h2>
            <div className="tw-text-zinc-400 tw-mb-4">
                <p>You are now minutes away from joining the {domain} team. Click the link in the verification email we sent you. If you haven&apos;t received it, check your spam inbox. Your verification link will redirect you to our Marketplace hub where you can log in and check your application status.</p>
                <p className="mb-4">You can now take part in building out an asset by sending proposals, partnering with brands, and joining teams.</p>
            </div>
            <div className="d-grid">
                <a href={"https://www.contrib.com/account/autologinforms?email=" + emailCode + "&form=partnership"} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-3">
                    Go to your Contrib account
                </a>
            </div>
        </div>
    );
}
