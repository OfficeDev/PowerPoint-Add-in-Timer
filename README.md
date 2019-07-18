---
topic: sample
products:
- office-365
- office-powerpoint
languages:
- javascript
- html
extensions:
  contentType: samples
  technologies:
  - Add-ins
  platforms:
  - CSS
  createdDate: 8/20/2015 2:33:47 PM
---
# PowerPoint-Add-in-Timer

A PowerPoint task pane add-in that provides a timer. 

**Table of contents**

* [Summary](#summary)
* [Prerequisites](#prerequisites)
* [Description of the code](#codedescription)
* [Build and debug](#build)
* [Questions and comments](#questions)
* [Additional resources](#additional-resources)

<a name="summary"></a>
## Summary

In this sample, we show you how to use the [JavaScript API for Office](https://msdn.microsoft.com/en-us/library/office/fp142185.aspx) to create a timer in a task pane add-in. This sample makes use of the showNotification() alert, that pops up every 10 seconds. The [Settings.set](https://msdn.microsoft.com/en-us/library/office/fp161063.aspx) and [Settings.get](https://msdn.microsoft.com/EN-US/library/office/fp142180.aspx) methods are used to save the number of timer trials.

<a name="prerequisites"></a>
## Prerequisites

This sample requires the following:  

  - Visual Studio 2013 with Update 5 or Visual Studio 2015.  
  - PowerPoint 2013 or PowerPoint 2016.
  - Internet Explorer 9, which must be installed but doesn't have to be the default browser. 
  - One of the following as the default browser: Internet Explorer 9, Safari 5.0.6, Firefox 5, or Chrome 13.
  - Familiarity with JavaScript programming.

<a name="codedescription"></a>
## Description of the code

Start the timer by using the buttons in the task pane. A notification in a red background color displays every 10 seconds to notify the time. 
To stop the timer, click the Stop timer button. All of the times are displayed, with the trial number attached. You can clear the timer trials by clicking the Clear timer button.

<a name="build"></a>
## Build and debug

1. Open the OfficeAppPPTTaskPaneTimer.sln file in Visual Studio.
2. Press **F5** to build and deploy the sample add-in.
3. On the **Home** ribbon, click **Open** in the **Timer** group.

<a name="questions"></a>
## Questions and comments

- If you have any trouble running this sample, please [log an issue](https://github.com/OfficeDev/PowerPoint-Add-in-Timer/issues).
- Questions about Office Add-ins development in general should be posted to [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Make sure that your questions or comments are tagged with [office-addins].

<a name="additional-resources"></a>
## Additional resources

- [More Add-in samples](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Office Add-ins](http://msdn.microsoft.com/library/office/jj220060.aspx)
- [Anatomy of an Add-in](https://msdn.microsoft.com/library/office/jj220082.aspx#StartBuildingApps_AnatomyofApp)
- [Creating an Office add-in with Visual Studio](https://msdn.microsoft.com/library/office/fp179827.aspx#Tools_CreatingWithVS)

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.


This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
