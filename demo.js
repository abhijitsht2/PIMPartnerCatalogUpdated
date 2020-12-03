import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './Partner_Catalog_1.css';
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
import DropdownIcon from '../../IconDown.png';
import RemoveIcon from '../../Iconremove.png';
import ClearIcon from '../../Iconclose.png';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Styles = makeStyles({
  dialogStyle: {
    width:540,
    height:525,
    margin: '50px 0.4px 50px 400px',
    padding: '0 0 7px',
    borderRadius:4
  },
});


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  var firstclick=false;
  var i=0; 
  const [open, setOpen] = React.useState(false);
  const styleclass = Styles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleConfirm = () => {
    var SKUno=$('.targetCheckbox_BorderRegular:checked').length;
    if(SKUno>0){
    toastr.options = {
      positionClass : 'toast-top-center-full-width',
      hideDuration: 300,
      timeOut: 20000,
      closeButton: false,
    }
    toastr.clear();
    setTimeout(() => toastr.success(SKUno+' SKU(s) Mapped Successfully','',{"iconClass": 'targetcategory-mapped'}), 300);
    setOpen(false);
  }
  };
  const TargetClose= () => {
    $('.appendbutton').remove();
    $('.appendbtn').remove();
    firstclick=false;
    $('.button-Close').css("left","0px");
    $('.button-Close').css("bottom","1px");
    $('input[name="targetcategory"]:checked').prop('checked', false);
    document.getElementById("categoryno").innerHTML=0;
    i=0;
  };

  const SearchTargetCategory= () => {
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputFieldTarget");
    filter = input.value.toUpperCase();
    ul = document.getElementById("targetUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  };
  
  
  $(document).ready(function() {
    var targetcat='';
    
    $('#homeappl').change(function() {
      
        if(this.checked) {
          i=i+1;
          document.getElementById("categoryno").innerHTML=i;
          targetcat=this.value;
          if(firstclick==true){
            $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>");
            if(i==1){
            $('.button-Close').css("left","290px");
          }
          else if(i==2){
            $('.button-Close').css("left","171px");
          }
          else if(i==3){
            $('.button-Close').css("left","64px");
          }
           }
           else{
           $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>");
           if(i==1){
            $('.button-Close').css("left","290px");
          }
          else if(i==2){
            $('.button-Close').css("left","171px");
          }
          else if(i==3){
            $('.button-Close').css("left","64px");
          }
           firstclick=true;
           }
        }
        else{
          i=i-1;
          document.getElementById("categoryno").innerHTML=i;
        }
           
    });
    $(document).on("click", "span.close" , function() {
      $(this).parent().remove();
    });
    $('#kitchenappl').change(function() {
      if(this.checked) {
        i=i+1;
        document.getElementById("categoryno").innerHTML=i;
        targetcat=this.value;
        if(firstclick==true){
          $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>");
          if(i==1){
            $('.button-Close').css("left","290px");
          }
          else if(i==2){
            $('.button-Close').css("left","171px");
          }
          else if(i==3){
            $('.button-Close').css("left","64px");
          }
         }
         else{
          $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>");
         firstclick=true;
         if(i==1){
          $('.button-Close').css("left","290px");
        }
        else if(i==2){
          $('.button-Close').css("left","171px");
        }
        else if(i==3){
          $('.button-Close').css("left","64px");
        }
         }
      }   
      else{
        i=i-1;
        document.getElementById("categoryno").innerHTML=i;
      }
         
  });
  $('#entertainment').change(function() {
    if(this.checked) {
      targetcat=this.value;
      i=i+1;
      document.getElementById("categoryno").innerHTML=i;
      if(firstclick==true){
        $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>");
        if(i==1){
          $('.button-Close').css("left","290px");
        }
        else if(i==2){
          $('.button-Close').css("left","171px");
        }
        else if(i==3){
          $('.button-Close').css("left","64px");
        }
       }
       else{
        $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>");
        if(i==1){
          $('.button-Close').css("left","290px");
        }
        else if(i==2){
          $('.button-Close').css("left","171px");
        }
        else if(i==3){
          $('.button-Close').css("left","64px");
        }
       firstclick=true;
       }
    }
    else{
      i=i-1;
      document.getElementById("categoryno").innerHTML=i;
    }
          
});
$('#mobilephones').change(function() {
  if(this.checked) {
    i=i+1;
    targetcat=this.value;
    document.getElementById("categoryno").innerHTML=i;
    if(firstclick==true){
      $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>");
      if(i==1){
        $('.button-Close').css("left","290px");
      }
      else if(i==2){
        $('.button-Close').css("left","171px");
      }
      else if(i==3){
        $('.button-Close').css("left","64px");
      }
     }
     else{
      $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>");
      if(i==1){
        $('.button-Close').css("left","290px");
      }
      else if(i==2){
        $('.button-Close').css("left","171px");
      }
      else if(i==3){
        $('.button-Close').css("left","64px");
      }
     firstclick=true;
     }
  }
  else{
    i=i-1;
    document.getElementById("categoryno").innerHTML=i;
  }
         
});
$('#laptops').change(function() {
  if(this.checked) {
    i=i+1;
    document.getElementById("categoryno").innerHTML=i;
    targetcat=this.value;
    if(firstclick==true){
      $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>");
      if(i==1){
        $('.button-Close').css("left","290px");
      }
      else if(i==2){
        $('.button-Close').css("left","171px");
      }
      else if(i==3){
        $('.button-Close').css("left","64px");
      }
     }
     else{
      $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>");
      if(i==1){
        $('.button-Close').css("left","290px");
      }
      else if(i==2){
        $('.button-Close').css("left","171px");
      }
      else if(i==3){
        $('.button-Close').css("left","64px");
      }
     firstclick=true;
     }
  }
  else{
    i=i-1;
    document.getElementById("categoryno").innerHTML=i;
  }    
});
$('#watches').change(function() {
  if(this.checked) {
    i=i+1;
    document.getElementById("categoryno").innerHTML=i;
    targetcat=this.value;
    if(firstclick==true){
      $("#append").after("<button class='appendbutton'>"+targetcat+"<span class='close'>&times;</span></button>");
      if(i==1){
        $('.button-Close').css("left","290px");
      }
      else if(i==2){
        $('.button-Close').css("left","171px");
      }
      else if(i==3){
        $('.button-Close').css("left","64px");
      }
     }
     else{
      $("#targetInputField").after("<button id='append' class='appendbtn'>"+targetcat+"<span class='close'>&times;</span></button>");
      if(i==1){
        $('.button-Close').css("left","290px");
      }
      else if(i==2){
        $('.button-Close').css("left","171px");
      }
      else if(i==3){
        $('.button-Close').css("left","64px");
      }
     firstclick=true;
     }
  }
  else{
    i=i-1;
    document.getElementById("categoryno").innerHTML=i;
  }   
});
});

  return (
    <div >
      <button className="mapCatalog" onClick={handleClickOpen}>
      Map to Catalogue
      </button>
      <Dialog classes={{root: styleclass.dialogStyle}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p className="dialogTitle">Select Target Category</p>
          
        </DialogTitle>
        <DialogContent dividers>
          <div className="targetContentBackground">
        <input className="Input-Field-Target" id="inputFieldTarget" type="text" placeholder="Search" name="search"/>
          <button className="button-9-9-Target" type="submit" onClick={SearchTargetCategory}><i className="fa fa-search"></i></button>
          <div>
            <p className="Launchpap-Copy-3">Electronics</p>
          </div>
          <div>
          <ul id="targetUL">
            <li className="targetFirstBackground"><input type="checkbox" id="homeappl" value="Homeappliances" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Home Appliances</p></li>
            <li className="targetSecondBackground"><input type="checkbox" id="kitchenappl" value="Kitchenappl" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Kitchen Appliances</p></li>
            <li className="targetFirstBackground"><input type="checkbox" id="entertainment" value="Entertainment" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Entertainment</p></li>
            <li className="targetSecondBackground"><input type="checkbox" id="mobilephones" value="Mobilephones" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Mobile Phones</p></li>
            <li className="targetFirstBackground"><input type="checkbox" id="laptops" value="Laptops" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Laptops</p></li>
            <li className="targetSecondBackground"><input type="checkbox" id="watches" value="Watches" name="targetcategory" className="targetCheckbox_BorderRegular"/><p className="targetColumn-Title">Watches</p></li>
          </ul>
          </div>
          <div className="targetselRectangle">
          <img src={DropdownIcon} className="targetdown"/>
          <p className="targetSelected-Items-1">Selected Categories (<span id="categoryno">0</span>)</p>
          <input type="text" id="targetInputField" className="targetselInput-Field"/>
          <button id="targetCatClose" className="button-Close" onClick={TargetClose}><img src={ClearIcon}/></button>
          </div>
          </div>
        </DialogContent>
        <DialogActions dividers>
          <button className="targetConfirmButton" onClick={handleConfirm} autoFocus>
            Confirm
          </button>
          <button className="targetCancelButton" onClick={handleClose}>
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
