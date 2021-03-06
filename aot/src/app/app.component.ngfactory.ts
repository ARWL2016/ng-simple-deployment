/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../../src/app/app.component';
const styles_AppComponent:any[] = ([] as any[]);
export const RenderType_AppComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AppComponent,
  data: {}
}
);
export function View_AppComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Simple Deployment'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),15,'nav',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'a',[
      [
        'routerLink',
        '/crisis-center'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,7).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        2,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,1,{links: 1}),
    import0.ɵqud(301989888,2,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['Crisis Center'])),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'a',[
      [
        'routerLink',
        '/heroes'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,14).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        4,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,3,{links: 1}),
    import0.ɵqud(301989888,4,{linksWithHrefs: 1}),
    (l()(),import0.ɵted((null as any),['Heroes'])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.RouterOutlet,[
      import1.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    const currVal_2:any = '/crisis-center';
    ck(v,7,0,currVal_2);
    const currVal_3:any = 'active';
    ck(v,8,0,currVal_3);
    const currVal_6:any = '/heroes';
    ck(v,14,0,currVal_6);
    const currVal_7:any = 'active';
    ck(v,15,0,currVal_7);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,7).target;
    const currVal_1:any = import0.ɵnov(v,7).href;
    ck(v,6,0,currVal_0,currVal_1);
    const currVal_4:any = import0.ɵnov(v,14).target;
    const currVal_5:any = import0.ɵnov(v,14).href;
    ck(v,13,0,currVal_4,currVal_5);
  });
}
function View_AppComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'my-app',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import0.ɵdid(24576,(null as any),0,import3.AppComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AppComponentNgFactory:import0.ComponentFactory<import3.AppComponent> = import0.ɵccf('my-app',import3.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvQ09NSS9Eb2N1bWVudHMvR2l0SHViL25nLXNpbXBsZS1kZXBsb3ltZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9DT01JL0RvY3VtZW50cy9HaXRIdWIvbmctc2ltcGxlLWRlcGxveW1lbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvQ09NSS9Eb2N1bWVudHMvR2l0SHViL25nLXNpbXBsZS1kZXBsb3ltZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cy5BcHBDb21wb25lbnQuaHRtbCIsIm5nOi8vL0M6L1VzZXJzL0NPTUkvRG9jdW1lbnRzL0dpdEh1Yi9uZy1zaW1wbGUtZGVwbG95bWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMuQXBwQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGgxPlNpbXBsZSBEZXBsb3ltZW50PC9oMT5cbiAgICA8bmF2PlxuICAgICAgPGEgcm91dGVyTGluaz1cIi9jcmlzaXMtY2VudGVyXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPkNyaXNpcyBDZW50ZXI8L2E+XG4gICAgICA8YSByb3V0ZXJMaW5rPVwiL2hlcm9lc1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5IZXJvZXM8L2E+XG4gICAgPC9uYXY+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAiLCI8bXktYXBwPjwvbXktYXBwPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQ0k7SUFBSTtJQUFzQjtJQUMxQjtJQUFLO0lBQ0g7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQXlEO0lBQWlCO0lBQzFFO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUFrRDtJQUFVO0lBQ3hEO0lBQ047Z0JBQUE7Ozs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStCOzs7SUFIMUI7SUFBSCxTQUFHLFNBQUg7SUFBK0I7SUFBL0IsU0FBK0IsU0FBL0I7SUFDRztJQUFILFVBQUcsU0FBSDtJQUF3QjtJQUF4QixVQUF3QixTQUF4Qjs7SUFEQTtJQUFBO0lBQUEsU0FBQSxtQkFBQTtJQUNBO0lBQUE7SUFBQSxVQUFBLG1CQUFBOzs7OztJQ0pOO2dCQUFBOzs7OyJ9
