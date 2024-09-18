
function UserInput({PuserInput, PonChange}){

// PonChange means the Prop for onChange
    return(
        <section id="user-input">
        <div className="input-group">
        <p>
            <label>Initial Investment </label>
            <input type="number" required 
            value={PuserInput.initialInvestment}
            onChange={(event)=> PonChange('initialInvestment', event.target.value)}/>
        </p>
        <p>
            <label>Annual Investment </label>
            <input type="number" required
            value={PuserInput.annualInvestment}
            onChange={(event)=> PonChange('annualInvestment', event.target.value)}/>
        </p>
        </div>
        <div className="input-group">
        <p>
            <label>Expected Return</label>
            <input type="number" required 
            value={PuserInput.expectedReturn}
            onChange={(event)=> PonChange('expectedReturn', event.target.value)}/>
        </p>
        <p>
            <label>Duration</label>
            <input type="number" required
            value={PuserInput.duration}
            onChange={(event)=> PonChange('duration', event.target.value)}/>
        </p>
        </div>
        </section>
    )


}
export default UserInput;