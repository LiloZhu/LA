jQuery.sap.declare("osr.eWorkflow.LA.Component");

sap.ui.core.UIComponent.extend("osr.eWorkflow.LA.Component",
		{
	
/*		metdata:{
			routing: {
				config: {
					viewType: "JS",
					viewPath: "la",
					targetControl: "splitApp",
					clearTarget: false,
					translition: "slide"
				
				},

			rounts: [
			         ]


			}
		},*/
		
/*		// ---Init Data---
		init: function() {
			jQuery.sap.require("sap.m.routing.RouteMatchHandler");
			jQuery.sap.require("sap.ui.core.routing.HashChanger");
			
			//call createcontent
			sap.ui.core.UIComponent.property.init.apply(this.arguments);
			
			this._router = this.getRouter();
			
			//init the router
			this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
			this._router.initialize();
			
		},
		*/
		
		//---Create Content---
		createContent : function() {
			
			// create root view
			var oView = sap.ui.view({
				id : "app",
				viewName : "osr.eWorkflow.LA.View.LA",
				type : "JS",
				viewData : { component : this }
			});
			
			//var oModel
			return oView;
			
		}


		});