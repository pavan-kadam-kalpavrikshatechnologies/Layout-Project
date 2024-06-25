sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.demo.layout.controller.View1", {
            onInit: function () {

            },
            onPressIcon: function() {
                window.open("https://www.linkedin.com/in/pavan-kadam-1a9862268/", "_blank");
            },
            onPressEvent : function(){
                var oView = this.getView();
                if (!this.oDialog) {
                    this.oDialog = sap.ui.core.Fragment.load({
                        name: "sap.kt.demo.layout.fragment.first",
                        controller: this
                    }).then(function (oDialog) {
                        this.oDialog = oDialog;
                        oView.addDependent(this.oDialog);
                        this.OnValidation()
                        this.oDialog.open();
                    }.bind(this));
                } else {
                    this.OnValidation()
                    this.oDialog.open();
                    sap.ui.getCore().byId("expdate").setValue("")
                    sap.ui.getCore().byId("day").setValue("")
                    sap.ui.getCore().byId("expname").setValue("")
                    sap.ui.getCore().byId("expamount").setValue("")
                    // sap.ui.getCore().byId("exptype").setValue("")
                }
            },
            onPressClose: function(){
                this.oDialog.close();
            },
            // onPressSave: function () {
            //     var exptype = sap.ui.getCore().byId("exptype").getSelectedKey();
            //     var date = sap.ui.getCore().byId("expdate").getValue();
            //     var day = sap.ui.getCore().byId("day").getValue();
            //     var oModel1 = this.getView().getModel("modeldata").getData();
            //     var amount = 1000;
            //     var oModel = this.getOwnerComponent().getModel("modeldata").getData();
            //     var lastItem = oModel.studentdata.length;
            //     var lastItemId = lastItem + 1;
            //     var p = new Date(date);
                
            
            //     var expname = sap.ui.getCore().byId("expname").getValue();
            //     if(this.flag===true){
            //         sap.ui.getCore().byId("expdate").setValueState("None");
            //             if (day <= 30 && day !== "") {
            //                 sap.ui.getCore().byId("day").setValueState("None");
            //                 if (exptype === "Perdiem") {
            //                     for (let i = 0; i < day; i++) {
            //                         var id = lastItemId;
            //                         var newDate = new Date(p.getTime());
            //                         newDate.setDate(newDate.getDate() + i);
            //                         var newAmount = amount;
            //                         var oPayload = {
            //                             "expid": id,
            //                             "expname": "Perdiem",
            //                             "amount": newAmount,
            //                             "Date": newDate
            //                         };
            //                         oModel1.studentdata.push(oPayload);
            //                         lastItemId++;
            //                     }
            //                 } else if (exptype === "Taxi") {
            //                     for (let i = 0; i < day; i++) {
            //                         var id = lastItemId;
            //                         var newDate = new Date(p.getTime());
            //                         newDate.setDate(newDate.getDate() + i);
            //                         var newAmount = "";
            //                         var oPayload = {
            //                             "expid": id,
            //                             "expname": "Taxi",
            //                             "amount": newAmount,
            //                             "Date": newDate
            //                         };
            //                         oModel1.studentdata.push(oPayload);
            //                         lastItemId++;
            //                     }
            //                 } else if(exptype==='None') {
            //                     // sap.m.MessageToast.show("Expense Enter the value", { duration: 3000, width: "15em" });
            //                 }
            //                 if (expname !== "") {
            //                     sap.ui.getCore().byId("expname").setValueState("None");
            //                 var expamount = sap.ui.getCore().byId("expamount").getValue();
            //                 if (expamount) { 
            //                     var formattedAmount = expamount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            //                         var newDate = new Date(p.getTime());
            //                         newDate.setDate(newDate.getDate() + i);
            //                         var id = lastItemId ;
            //                         var oPayload = {
            //                             "expid": id,
            //                             "expname": expname,
            //                             "amount": formattedAmount,
            //                             "Date": newDate
            //                         };
            //                         oModel1.studentdata.push(oPayload);
                                
            //                     }
            //                 } else {
            //                     sap.ui.getCore().byId("expname").setValueState("None");
            //                     sap.ui.getCore().byId("expname").setValueStateText("Enter a Name");
            //                 }
            //                 this.getView().getModel("modeldata").setData(oModel1);

            //                 this.oDialog.close();

            //                 this.byId("expensesTable").getModel("modeldata").refresh();
            //             } else {
            //                 sap.ui.getCore().byId("day").setValueState("Error");
            //                 sap.ui.getCore().byId("day").setValueStateText("Enter a value only gether than 1 and small 30 and not blank");
            //             }
                   
            //     }else{
            //         sap.ui.getCore().byId("expdate").setValueState("Error");
            //         sap.ui.getCore().byId("expdate").setValueStateText("Enter a value only 60 days");
            //     }
            //     // sap.ui.getCore().byId("expdate").setValueState("Error");
            //     // sap.ui.getCore().byId("expdate").setValueStateText("Enter a value only 60 days");
            // },            
            
            onPressSave: function () {
                var switch1 = sap.ui.getCore().byId("buttonId").getState();
                
                if (switch1 === true) {
                    var exptype = sap.ui.getCore().byId("exptype").getSelectedKey();
                    var date = sap.ui.getCore().byId("expdate").getValue();
                    var day = sap.ui.getCore().byId("day").getValue();
            
                    var oModel1 = this.getView().getModel("modeldata").getData();
                    var oModel = this.getView().getModel("modeldata").getData();
            
                    var amount = 1000;
                    var lastItem = oModel.studentdata.length;
                    var lastItemId = lastItem + 1;
            
                    var p = new Date(date);
                    console.log(this.flag);
                    if (this.flag === true) {
                        this.flag=false
                        sap.ui.getCore().byId("expdate").setValueState("None");
            
                        if (day <= 30 && day !== "") {
                            sap.ui.getCore().byId("day").setValueState("None");
            
                            if(exptype === "Perdiem" || exptype === "Taxi") {
                                for (let i = 0; i < day; i++) {
                                    var id = lastItemId;
                                    var newDate = new Date(p.getTime());
                                    newDate.setDate(newDate.getDate() + i);
                                    var newAmount = (exptype === "Perdiem") ? amount : "";
                                    var oPayload = {
                                        "expid": id,
                                        "expname": exptype,
                                        "amount": newAmount,
                                        "Date": newDate
                                    };
                                    oModel1.studentdata.push(oPayload);
                                    lastItemId++;
                                }
                                this.getView().getModel("modeldata").setData(oModel1);
                                this.oDialog.close();
                                this.byId("expensesTable").getModel("modeldata").refresh();
                            } else {
                                sap.m.MessageToast.show("Please select a valid expense type", { duration: 3000, width: "15em" });
                            }
                        } else {
                            sap.ui.getCore().byId("day").setValueState("Error");
                            sap.m.MessageToast.show("Please enter a value between 1 and 30 and not blank");
                        }
                    } else {
                        sap.ui.getCore().byId("expdate").setValueState("Error");
                        sap.ui.getCore().byId("expdate").setValueStateText("Please enter a date within the last 60 days");
                    }
                } else {
                    var expname = sap.ui.getCore().byId("expname").getValue();
                    var expamount = sap.ui.getCore().byId("expamount").getValue();
                    var date = sap.ui.getCore().byId("expdate").getValue();
                    var oModel1 = this.getView().getModel("modeldata").getData();
                    var oModel = this.getOwnerComponent().getModel("modeldata").getData();
                    var p = new Date(date);
                    var lastItem = oModel.studentdata.length;
                    var lastItemId = lastItem + 1;
                    this.flag
                    
                    if (this.flag === true) {
                        this.flag=false
                        console.log(this.flag);
                        sap.ui.getCore().byId("expdate").setValueState("None");   
                        if (expname !== "") {
                            sap.ui.getCore().byId("expname").setValueState("None");
                
                            if (expamount !== "") { 
                                sap.ui.getCore().byId("expamount").setValueState("None");
                                var formattedAmount = expamount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                var newDate = new Date(p.getTime());
                                newDate.setDate(newDate.getDate());
                                var id = lastItemId;
                                var oPayload = {
                                    "expid": id,
                                    "expname": expname,
                                    "amount": formattedAmount,
                                    "Date": newDate
                                };
                                oModel1.studentdata.push(oPayload);
                                this.getView().getModel("modeldata").setData(oModel1);
                                this.oDialog.close();
                                this.byId("expensesTable").getModel("modeldata").refresh();  
                            } else {
                                sap.ui.getCore().byId("expamount").setValueState("Error");
                                sap.ui.getCore().byId("expamount").setValueStateText("Please enter a name");
                            } 
                        } else {
                            sap.ui.getCore().byId("expname").setValueState("Error");
                            sap.ui.getCore().byId("expname").setValueStateText("Please enter a name");
                        } 
                    } else {
                            sap.ui.getCore().byId("expdate").setValueState("Error");
                            sap.ui.getCore().byId("expdate").setValueStateText("Please enter a date within the last 60 days");
                        }
                }
            },                                   
        //     handleChange: function(oEvent) {
        //         var oDate = oEvent.getSource();
        //         var SelectedDate = new Date(oDate.getDateValue());
                
        //         var oToday = new Date();
        //         var oMinDate = new Date(oToday);
        //         oMinDate.setDate(oToday.getDate() - 60);
                
        //         var oMaxDate = new Date(oToday);
        //         this.flag = SelectedDate >= oMinDate && SelectedDate <= oMaxDate;

        // },
        OnOffButton: function(oEvent) {
            var switchState = oEvent.getSource().getState(); 
            if (switchState === true) { 
                sap.ui.getCore().byId("exptype").setVisible(true);
                sap.ui.getCore().byId("day").setVisible(true);
                sap.ui.getCore().byId("expname").setVisible(false);
                sap.ui.getCore().byId("expamount").setVisible(false);
            } else if (switchState === false) { 
                sap.ui.getCore().byId("expname").setVisible(true);
                sap.ui.getCore().byId("expamount").setVisible(true);
                sap.ui.getCore().byId("exptype").setVisible(false);
                sap.ui.getCore().byId("day").setVisible(false);
            }                
        },
        onViewPage : function(){
            var oRouting = this.getOwnerComponent().getRouter()
                oRouting.navTo("RouteView2")
        }, 
        OnValidation : function(){
            var min = new Date()
            var max = new Date(min)
            max.setDate(max.getDate()-60)
            sap.ui.getCore().byId("expdate").setMinDate(min)
            sap.ui.getCore().byId("expdate").setMaxDate(max)
        }
        });
    });
    
    