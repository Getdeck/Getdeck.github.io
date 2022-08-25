import { useEffect } from 'react';
export const Termynal = (props) => {
    useEffect(() => {
        console.log("termynal!")
        setTimeout(() => {
            let termynal = new window.Termynal('#termynal')
        }, 1000)
    })
    return (
        <div>
            <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/316871/termynal.min.js" data-termynal-container="#termynal"></script>
            <div id="termynal">
                {props.children}
            </div>
        </div>
    )
}