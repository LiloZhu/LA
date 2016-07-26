jQuery.sap.declare("osr.eWorkflow.LA.Component");

sap.ui.core.UIComponent.extend("osr.eWorkflow.LA.Component", {

	createContent : function() {

		//---create root view---
		var oView = sap.ui.view({
			id : "app",
			viewName : "osr.eWorkflow.LA.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		//---Set i18n model---
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/textBundle.properties"
		});
		oView.setModel(i18nModel,"i18n");
		

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		//var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		//oView.setModel(oModel);

		// done
		return oView;
	}
});