import React from 'react'
import CountUp from 'react-countup';
const Counter = ({start,end}) => {
    return (

        <>
            <CountUp
                start={start}
                end={end}
                duration={2}
                separator=" "
                // decimals={4}
                // decimal=","
                // prefix="EUR "
                // suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                        {/* <button onClick={start}>Start</button> */}
                    </div>
                )}
            </CountUp>
        </>
    )
}

export default Counter