import { useState } from "react"

const AccordionCard = ({title, answer, show, index, showAccordion, setShowAccordion}) => {
    const handleClick = () => {
        let items = [...showAccordion]
        items[index] = !items[index]
        setShowAccordion(items)
    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button onClick={handleClick} className={`accordion-button ${show ? "": "collapsed"}`} type="button">
                    {title}
                </button>
            </h2>
            <div className={`accordion-collapse ${show ? "": "collapse"}`}>
                <div className="accordion-body">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}

const FAQ = () => {
    const accordianData = [
        {
            title: "Can I shop products from the Mall directly",
            answer: "nope, not currently",
            show: true
        }, 
        {
            title: "Can I shop products from the Mall directly",
            answer: "nope, not currently",
            show: false
        }
    ]
    const [showAccordion, setShowAccordion] = useState(Array(accordianData.length).fill(false))
    return (<>
        <h2 className="ps-3">FAQs</h2>
        <div className="accordion">
            {
                accordianData.map(({answer, title}, index) => {
                return <AccordionCard 
                    title={title} 
                    answer={answer} 
                    show={showAccordion[index]} 
                    showAccordion={showAccordion} 
                    setShowAccordion={setShowAccordion} 
                    index={index} 
                />
            })
            }
        </div> 
    </>)
}

export default FAQ