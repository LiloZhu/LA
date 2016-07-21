sap.ui.controller("la.LA",
{

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf la.LA
	 */
	// onInit: function() {
	//
	// },
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf la.LA
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf la.LA
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf la.LA
	 */
	// onExit: function() {
	//
	// }
	// ======Initialization Data======
	// ->
	onInit : function()
	{
		// ---Type of Leave---
		//->
		var oData1 =
		{
			"TOLS" :
			[
					{
						"TOL_CODE" : "01",
						"TOL_TEXT" : "Annual Leave（年假）"
					},
					{
						"TOL_CODE" : "02",
						"TOL_TEXT" : "Personal Leave（事假）"
					},
					{
						"TOL_CODE" : "03",
						"TOL_TEXT" : "Sick Leave（病假）"
					},
					{
						"TOL_CODE" : "04",
						"TOL_TEXT" : "Compensatory Leave（补休）"
					}					
			]
		};
		
		//<-
		
		var oModel_TOL = new sap.ui.model.json.JSONModel();
		oModel_TOL.setData(oData1);
		sap.ui.getCore().setModel(oModel_TOL, "oTOL");
		//this.getView().setModel(oModel_TOL, "TOL");		
      
	  //---Now Date/Time---
	  var oData2 = {
				"Date_Value": new Date().toDateString("yyyy-MM-dd")
			   
	  };
	  var oModel_NOW = new sap.ui.model.json.JSONModel();
	  oModel_NOW.setData(oData2); 
	  this.getView().setModel(oModel_NOW);
       
	//<END>
	}

// <-

});