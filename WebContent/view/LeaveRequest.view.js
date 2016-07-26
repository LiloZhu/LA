sap.ui.jsview("osr.eWorkflow.LA.view.LeaveRequest", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.LeaveRequest
	*/ 
	getControllerName : function() {
		return "osr.eWorkflow.LA.view.LeaveRequest";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.LeaveRequest
	*/ 
	createContent : function(oController)
	{

		/*
		 * //======Application Header====== var oAppHeader = new
		 * sap.ui.commons.ApplicationHeader("appHeader");
		 * oAppHeader.setLogoSrc("http://www.osram.com/media/resource/110x110/718255/osram.png");
		 * //oAppHeader.setLogoSrc("http://www.sap.com/global/images/SAPLogo.gif");
		 * oAppHeader.setLogoText("OSRAM eWorkflow - Leave
		 * Application");
		 * 
		 * oAppHeader.setUserName("Wei.Zhu");
		 * oAppHeader.setDisplayLogoff(true);
		 * oAppHeader.setDisplayWelcome(true);
		 * oAppHeader.addStyleClass("color")
		 * 
		 * var ele = [oAppHeader];
		 */

		// ------Page Title------
		var sTitle_0 = "Osram SAP eWorkflow";

		// ---Form Title---
		// ->
		var oTitle_0 = new sap.ui.core.Title("T00");
		oTitle_0.setIcon("sap-icon://request");
		oTitle_0.setText("Leave Application(请假申请单)");
		// oTitle_1.addStyleClass("fontclass");
		// <-

		// ---Form Element---
		// ->
		var oTitle_1 = new sap.ui.core.Title("T01");
		oTitle_1.setText("General Information(基本信息)");
		// -Department-
		var oDepart_t = new sap.m.Label("depart_t",
		{
			text : "Department(部门)"
		});
		// oDepart_t.addStyleClass("fontclass");
		var oDepart_v = new sap.m.Input("depart_v",
		{
			value : "SAP A5 Center",
			//editable : false,
			width : "140px"
		});
		// oDepart_v.addStyleClass("fontclass");

		// -Name-
		var oUserName_t = new sap.m.Label("username_t",
		{
			text : "Name(姓名)"
		});
		var oUserName_v = new sap.m.Input("username_v");

		// -Employee.No-
		var oEmployeeNo_t = new sap.m.Label("employee_t",
		{
			text : "Employee.No.(工号)"
		});
		var oEmployeeNo_v = new sap.m.Input("employee_v");

		// -Entry Date-
		var oEntryDate_t = new sap.m.Label("entrydate_t",
		{
			text : "Entry Date(进厂日期)"
		});
		var oEntryDate_v = new sap.m.Input("entrydate_v");

		// -Type of Leave-
		var oItem_1 = new sap.ui.core.Item("tol_items",
		{
			key : "{oTOL>TOL_CODE}",
			text : "{oTOL>TOL_TEXT}"
		});
		
		
		var oLeaveType_t = new sap.m.Label("leavetype_t",
		{
			text : "Leave of Type(假别)"
		});
		var oLeaveType_v = new sap.m.Select("leavetype_v");
		oLeaveType_v.setModel(sap.ui.getCore().getModel("oTOL"));
		oLeaveType_v.bindAggregation("items",
		{
			path : "oTOL>/TOLS",
			template : oItem_1
		});

		// -Leave Dates-
		var oTitle_2 = new sap.ui.core.Title("T01-1");
		oTitle_2.setText("Leave Dates(请假时间)");
		var oLeaveDateF_t = new sap.m.Label("leavedatef_t",
		{
			text : "From(自)",
			labelfor : "leavedataf"
		});
		var oLeaveDateF_v = new sap.m.DatePicker("leavedataf",
		{
			value :
			{
				path : "/Date_Value"
			}
		});
		var oLeaveDateT_t = new sap.m.Label("leavedatet_t",
		{
			text : "From(至)",
			labelfor : "leavedatat"
		});
		var oLeaveDateT_v = new sap.m.DatePicker("leavedatat",
		{
			value :
			{
				path : "/Date_Value"
			}
		});
		
		//-Leave Day (S)-
		var oLeaveDay_t = new sap.m.Label("leaveday_t",
		{
			text : "Leave Day (S)（天数）",
		})
		var oLeaveDay_v = new sap.m.Input("leaveday_v");
		
		
		//-Reason-
		var oReason_t = new sap.m.Label("reason_t",{text: "Reason(理由)"});
		var oReadon_v = new sap.m.Input("reason_v",{value: ""});
													
		

		// ---<Group Screen Element>---
		var ele_sc1 =
				[
						oTitle_1,
						oDepart_t,
						oDepart_v,
						oUserName_t,
						oUserName_v,
						oEmployeeNo_t,
						oEmployeeNo_v,
						oEntryDate_t,
						oEntryDate_v,
						oLeaveType_t,
						oLeaveType_v,
						// oLeaveDate_t,
						oTitle_2,
						oLeaveDateF_t,
						oLeaveDateF_v,
						oLeaveDateT_t,
						oLeaveDateT_v,
						oLeaveDay_t,
						oLeaveDay_v,
						oReason_t,
						oReadon_v
				]
		// ---Form---
		// ->
		var layout_1 =
				sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout;
		var oSForm = new sap.ui.layout.form.SimpleForm("SF01",
		{
			title : oTitle_0,
			layout : layout_1,
			class : "fontclass",
			editable : true,
			content :
			[
				ele_sc1
			]
		});
		// oSForm.setTitle(oTitle_1)
		// oSForm.addStyleClass("fontclass");
		// oSForm.setMaxContainerCols("2");
		//oSForm.addContent(oLabel_1);

		//<-

		//======Leave Application======

		var ele =
		[
			oSForm
		];
		return new sap.m.Page(
		{
			title : sTitle_0,
			content :
			[
				ele
			],
			footer : new sap.m.Bar(
			{
				contentRight :
				[
						new sap.m.Button("save",
						{
							text : "Save",
							type : "Accept",
							width : "100px"
						}), new sap.m.Button("Cancel",
						{
							text : "Cancel",
							type : "Reject",
							width : "100px"
						})
				]
			})

		});

		return ele;

		//
	}

});