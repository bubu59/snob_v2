import '../globals.css'

export default function OnBoardingLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
            <html lang='en'>
                <body>
                    <div className='w-full flex min-h-screen flex-col'>
                        {children}
                    </div>
                </body>
            </html>
    )
}