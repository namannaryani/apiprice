import React from "react";
import styles from './styles.module.css';


function Homebutton() {


    


    return (
        <div style={{margin: "10px 100px 0px 100px"}}>
            <button type="button" class="btn btn-default" style={{fontWeight: "900"}}>
                <span class="glyphicon glyphicon-chevron-left" ></span>Home</button>
                <div className={styles.shadow}>
        <div className="container-fluid" style={{padding: "0px"}}>
            <div className="row" style={{margin: "10px"}, {textAlign: "center"}}>
                <h1>Nutrition Analysis API</h1>
            </div>
            <div className="container">
            <div className="row">
                    <div className="col-xs-3"></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.option1}>Developer</div></div>
                    <div  className="col-xs-3" ><div className={styles.option1}>Startup</div></div>
                    <div className="col-xs-3"><div className={styles.option1}>Enterprise</div></div>
               </div>
               
               <div className="row">
                    <div className="col-xs-3 col-md-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Cost</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.option2}>Free</div></div>
                    <div  className="col-xs-3" ><div className={styles.option2}>Free for startups</div></div>
                    <div className="col-xs-3"><div className={styles.option2}>Only Rs 2180/-</div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3"></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.but}><button className={styles.option3}>Start now</button></div></div>
                    <div  className="col-xs-3" ><div className={styles.but}><button className={styles.option31}>Contact us</button></div></div>
                    <div className="col-xs-3"><div className={styles.but}><button className={styles.option3}>Subscribe now</button></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Data caching allowed?</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>Yes</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}>No caching</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}>No caching<a href="#"> <span class="glyphicon glyphicon-info-sign"></span> </a></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Recipe analysis</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optionempty}></div></div>
                    <div  className="col-xs-3" ><div className={styles.optionempty}></div></div>
                    <div className="col-xs-3"><div className={styles.optionempty}></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Full recipe analyzed monthly</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>200 recipes/month</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}>1000 recipes/month</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}>10,000 recipes/month</div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Recipe submission per minute</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>No limit</div></div>
                    <div  className="col-xs-3" ><div className={styles.optionempty}></div></div>
                    <div className="col-xs-3"><div className={styles.optionempty}></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Text analysis</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optionempty}></div></div>
                    <div  className="col-xs-3" ><div className={styles.optionempty}></div></div>
                    <div className="col-xs-3"><div className={styles.optionempty}></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Text analysis hits monthly</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>1000 lines/month</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}>10,000 lines/month</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}>50,000 lines/month</div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Text analysis hits per minute</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>No limit</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}>10 minutes</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}>20 minutes</div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Natural Language Processing(NLP)</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}><span class="glyphicon glyphicon-ok"></span></div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}><span class="glyphicon glyphicon-ok"></span></div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}><span class="glyphicon glyphicon-ok"></span></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Health, Diet and Energy labeling</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>Basic labels<a href="#"> <span class="glyphicon glyphicon-info-sign"></span> </a></div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}><span class="glyphicon glyphicon-ok"></span></div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}><span class="glyphicon glyphicon-ok"></span></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Shopping aisle food labeling</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optionempty}></div></div>
                    <div  className="col-xs-3" ><div className={styles.optionempty}></div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}><span class="glyphicon glyphicon-ok"></span></div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Commercial Use</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>Not allowed</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}>Yes</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}>Yes</div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Attribution</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach} style={{color: "red"}}>Required*</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach} style={{color: "red"}}>Required*</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach} style={{color: "red"}} >Required*</div></div>
               </div>
               <div className="row">
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Support</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optioneach}>Forum</div></div>
                    <div  className="col-xs-3" ><div className={styles.optioneach}>Email</div></div>
                    <div className="col-xs-3"><div className={styles.optioneach}>Email + Phone</div></div>
               </div>
               <div className="row" style={{marginBottom: "20px"}}>
                    <div className="col-xs-3" style={{paddingLeft: "0px"}}><div className={styles.option21}>Contract duration</div></div>
                    <div  className="col-xs-3 col-md-3 col-lg-3"><div className={styles.optionend}>Month to month</div></div>
                    <div  className="col-xs-3" ><div className={styles.optionend}>Month to month</div></div>
                    <div className="col-xs-3"><div className={styles.optionend}>Month to month</div></div>
               </div>
            </div>
            <div className= "row" className={styles.lastrow}>
                <button className={styles.downbutton}>Nutrition Analysis API Demo</button>
            </div>
        </div>
        </div>
        </div>
    );
}


export default Homebutton;