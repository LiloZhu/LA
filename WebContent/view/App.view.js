sap.ui.jsview("osr.eWorkflow.LA.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.App
	*/ 
	getControllerName : function() {
		return "osr.eWorkflow.LA.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.App
	*/ 
	createContent : function(oController) {
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();
		
		// load the master page
		var LeaveRequest =	sap.ui.view({  
 					            id: "LeaveRequest",  
 					            viewName : "osr.eWorkflow.LA.view.LeaveRequest",  
 					            type: sap.ui.core.mvc.ViewType.JS });  
		//("Master", "sap.ui.demo.myFiori.view.Master");
		this.app.addPage(LeaveRequest, true);	
		
		// done
		return this.app;
		
	}

});