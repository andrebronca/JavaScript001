1 === 'b';      //false

var t;          //undefined

if (1){
    t = true;
} else {
    t = false;
}

t;      // true

if (0) { t = true; } else { t = false; }

t;      // false

/*  FALSY - (todos os outros valores são truthy)
undefined
null
NaN
0
-0
''
""
false
*/

if (undefined) { t = true; } else { t = false; }
if (null) { t = true; } else { t = false; }
if (NaN) { t = true; } else { t = false; }
if (-0) { t = true; } else { t = false; }
if ('') { t = true; } else { t = false; }
if ("") { t = true; } else { t = false; }
if (false) { t = true; } else { t = false; }


if ({}) { t = true; } else { t = false; }   //true
if ([]) { t = true; } else { t = false; }   //true

//inverte o valor
!true;  //false
!0;     //true

//descobre o valor booleando, usando: !!
!!0;    //false;
!!true;     //true;
!!false;    //false;
!!'0';      //true

