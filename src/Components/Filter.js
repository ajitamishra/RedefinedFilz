import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import Child from './Table';
import './filter.css'


var con=[
            {
            id:"",
            operator:"",
            filter:""
           }
         ]




class Filter extends React.Component {
      state = {
      id: "",
      operator:"",
      filter:"",
      data:MOCK_DATA,
      clicked:false,
      stringFilter:{
      id:"",
      operator:"",
      filter:""
      },
      integerFilter:{
        id:"",
        operator:"",
        filter:""
        },
      boolFilter:{
        id:"",
        operator:"",
        filter:""   
      },
      followingFilter:{
        id:"",
        operator:"",
        filter:""   
      },
    };



    
    
    handleChangeIntegerId=e=>{
        this.setState({id:e.target.value})
        this.setState(prevState => ({
            integerFilter: {                   // object that we want to update
                ...prevState.integerFilter,    // keep all other key-value pairs
                id: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeIntegerOperator=e=>{
        this.setState({operator:e.target.value})
        this.setState(prevState => ({
            integerFilter: {                   // object that we want to update
                ...prevState.integerFilter,    // keep all other key-value pairs
                operator: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeIntegerFilter = e => {
        this.setState({ filter: e.target.value });
        this.setState(prevState => ({
            integerFilter: {                   // object that we want to update
                ...prevState.integerFilter,    // keep all other key-value pairs
                filter: e.target.value       // update the value of specific key
            }
        }))
      };
      handleChangeBoolId=e=>{
        this.setState({id:e.target.value})
        this.setState(prevState => ({
            boolFilter: {                   // object that we want to update
                ...prevState.boolFilter,    // keep all other key-value pairs
                id: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeBoolOperator=e=>{
        this.setState({operator:e.target.value})
        this.setState(prevState => ({
            boolFilter: {                   // object that we want to update
                ...prevState.boolFilter,    // keep all other key-value pairs
                operator: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeBoolFilter = e => {
        this.setState({ filter: e.target.value });
        this.setState(prevState => ({
            boolFilter: {                   // object that we want to update
                ...prevState.boolFilter,    // keep all other key-value pairs
                filter: e.target.value       // update the value of specific key
            }
        }))
      };
    handleChangeStringId=e=>{
        this.setState({id:e.target.value})
        this.setState(prevState => ({
            stringFilter: {                   // object that we want to update
                ...prevState.stringFilter,    // keep all other key-value pairs
                id: e.target.value       // update the value of specific key
            }
        }))
    }
   
    handleChangeStringOperator=e=>{
        this.setState({operator:e.target.value})
        this.setState(prevState => ({
            stringFilter: {                   // object that we want to update
                ...prevState.stringFilter,    // keep all other key-value pairs
                operator: e.target.value       // update the value of specific key
            }
        }))
    }
    handleChangeStringFilter=e=>{
        this.setState({filter:e.target.value})
        this.setState(prevState => ({
            stringFilter: {                   // object that we want to update
                ...prevState.stringFilter,    // keep all other key-value pairs
                filter: e.target.value       // update the value of specific key
            }
        }))

    }
    
    handleSearch=e=>{
        con=[
            {
            id:"",
            operator:"",
            filter:""
           }
         ]
     con.push(this.state.stringFilter);
     con.push(this.state.integerFilter)
     con.push(this.state.boolFilter)
      this.setState({clicked:true})
      
     
      

      
    }




   
    render() 
    {
   
      return (
        <div> 
         
         
        <span> <select name="filters" id="id" onChange={this.handleChangeIntegerId}>
         <option value="Add Filter">Add Filter</option>
         <option value="followers">Followers</option>
          </select>
          </span>


          { (this.state.integerFilter.id==="followers") ?  <span><select name="" id="operator" onChange={this.handleChangeIntegerOperator}>
      <option value="">{" "}</option>
      <option value="GTE">{" >= "}</option>
      <option value="LTE">{" <= "}</option> 
          </select>
          </span>:  (this.state.integerFilter.id==="location") ?  <span><select name="" id="operator1" onChange={this.handleChangeStringOperator}>
      <option value="">{" "}</option>
      <option value="CONTAINS">{" contains "}</option>
     
          </select>
          </span>:  (this.state.integerFilter.id==="verified") ?  <span><select name="" id="operator2" onChange={this.handleChangeBoolOperator}>
      <option value="">{" "}</option>
      <option value="EQUALS">{" equals "}</option>
     
          </select>
          </span>:null
          
          }
          



          <span>
					{this.state.integerFilter.id === "verified" ? (
						<select onChange={this.handleChangeBoolFilter}>
							<option value="">Select</option>
							<option value="verified">Verified</option>
							<option value="notverified">Not Verified</option>
						</select>
					) : (this.state.integerFilter.id==="followers"?
						<input
							value={this.state.integerFilter.filter}
							onChange={this.handleChangeIntegerFilter}
						/>:this.state.boolFilter.id==="followers"?<input
                        value={this.state.stringFilter.filter}
                        onChange={this.handleChangeStringFilter}
                    />:""
					)}
				</span>


             <br></br>
             <br></br>

          <span> <select name="filters1" id="id1" onChange={this.handleChangeStringId}>
          <option value="Add Filter">Add Filter</option>
         <option value="location">Location</option>
          </select>
          </span>
 
          { (this.state.stringFilter.id==="followers") ?  <span><select name="" id="operator" onChange={this.handleChangeIntegerOperator}>
      <option value="">{" "}</option>
      <option value="GTE">{" >= "}</option>
      <option value="LTE">{" <= "}</option> 
          </select>
          </span>:  (this.state.stringFilter.id==="location") ?  <span><select name="" id="operator1" onChange={this.handleChangeStringOperator}>
      <option value="">{" "}</option>
      <option value="CONTAINS">{" contains "}</option>
     
          </select>
          </span>:  (this.state.stringFilter.id==="verified") ?  <span><select name="" id="operator2" onChange={this.handleChangeBoolOperator}>
      <option value="">{" "}</option>
      <option value="EQUALS">{" equals "}</option>
     
          </select>
          </span>:null
          
          }
          

          <span>
					{this.state.stringFilter.id === "verified" ? (
						<select onChange={this.handleChangeBoolFilter}>
							<option value="">Select</option>
							<option value="verified">Verified</option>
							<option value="notverified">Not Verified</option>
						</select>
					) : (this.state.stringFilter.id==="followers"?
						<input
							value={this.state.integerFilter.filter}
							onChange={this.handleChangeIntegerFilter}
						/>: (this.state.stringFilter.id==="location"?<input
                        value={this.state.stringFilter.filter}
                        onChange={this.handleChangeStringFilter}
                    />: "")
					)}
				</span>
                <br></br>
                <br></br>

<span> <select name="filters2" id="id2" onChange={this.handleChangeBoolId}>
<option value="Add Filter">Add Filter</option>
         <option value="verified">Verified</option>
          </select>
          </span>
 
          { (this.state.boolFilterid==="followers") ?  <span><select name="" id="operator" onChange={this.handleChangeIntegerOperator}>
      <option value="">{" "}</option>
      <option value="GTE">{" >= "}</option>
      <option value="LTE">{" <= "}</option> 
          </select>
          </span>:  (this.state.boolFilter.id==="location") ?  <span><select name="" id="operator1" onChange={this.handleChangeStringOperator}>
      <option value="">{" "}</option>
      <option value="CONTAINS">{" contains "}</option>
     
          </select>
          </span>:  (this.state.boolFilter.id==="verified") ?  <span><select name="" id="operator2" onChange={this.handleChangeBoolOperator}>
      <option value="">{" "}</option>
      <option value="EQUALS">{" equals "}</option>
     
          </select>
          </span>:null
          
          }
     
     <span>
					{this.state.boolFilter.id === "verified" ? (
						<select onChange={this.handleChangeBoolFilter}>
							<option value="">Select</option>
							<option value="verified">Verified</option>
							<option value="notverified">Not Verified</option>
						</select>
					) : (this.state.boolFilter.id==="followers"?
						<input
							value={this.state.integerFilter.filter}
							onChange={this.handleChangeIntegerFilter}
						/>: this.state.boolFilter.id==="followers" ?<input
                        value={this.state.stringFilter.filter}
                        onChange={this.handleChangeStringFilter}
                    />:""
					)}
				</span>
                <br></br>
                <br></br>
     
          <button onClick={this.handleSearch}>Search</button>
          {this.state.clicked===false?<Child con={con}/>:""}
           {this.state.clicked===true? <Child con={con}/>:""}
        </div>
      );
    }
}
  
  export default Filter;