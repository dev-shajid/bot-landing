import React from 'react' 
import Wrapper from './global/wrapper'
import { Button } from './ui/button'
import { LampContainer } from './ui/lamp'

export default function ReadyToTransform() {
    return (
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <LampContainer>
                <div className="max-w-lg mx-auto text-start md:text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-muted-foreground mt-6">
                        Your business deserves better. AttenSys delivers smarter, faster, AI-powered solutions to help you thrive.
                    </p>
                    <Button variant="secondary" className="mt-6">
                        Start Today - Your AI Revolution Awaits!
                    </Button>
                </div>
            </LampContainer>
        </Wrapper>
    )
}
