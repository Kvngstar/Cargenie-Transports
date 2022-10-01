const Loginform = () => {
    return ( 
        
        <div class="form">
        <form className="form__  mx-2" action="
        ">
            <h1 className="mt-3" >Login</h1>
            <div>
                <input type="text" id="fn" placeholder="Enter your email"/>
            </div>
            <div>
                <input type="password" id="ln" placeholder="Enter Your password"/>
            </div>
           
                <div class="input-group mt-4">
                    <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent">As</div>
                    </div>
                  
                  <select class="form-control" name="" id="">
                    <option>User</option>
                    <option>Car Owner</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div class="form-check mt-2">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked/>
                    keep me signed-in</label>
                </div>
             <div className="mx-auto w-100 bg-success mt-4">
                <input type="submit" className="btn btn-primary mx-auto w-100" value="login" onclick="calculate(event)"/>
            </div>
            
            
            <h6 id="output3"></h6>
        </form>
    </div>
     );
}
 
export default Loginform;