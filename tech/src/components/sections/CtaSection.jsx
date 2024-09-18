import Section from "./Section"

import Card from '../layout/Card'


function CtaSection() {
    return(
        <Section customclass="mb-10">
            <Card customclass="card cursor-pointer"
             typeInner='product'
             title="Item 2"
             price="$20.00"
             backgroundImage="url('/path/to/image2.jpg')"
            //  colors={}
            >
            </Card>
        </Section>
    )
}

export default CtaSection