export class dataUser {
  constructor (
    public name: string,
    public surname: string,
    public email: string,
    public phone: string,
    public birth: string,
    public city: string,
    public position?: string,
    public addAboutMe?: string,
    public aboutme?: string,
    ) { }
}
export class eduData {
  constructor (
    public eduname1: string,
    public edutype1: string,
    public eduname2?: string,
    public edutype2?: string,
    public eduname3?: string,
    public edutype3?: string,
    public eduname4?: string,
    public edutype4?: string,
    public coursename1?: string,
    public coursename2?: string,
    public coursename3?: string,
    public coursename4?: string,
    public dropdown? : string
    ) { }
  }
  
  export class jobData {
    constructor (
      public jobtitle1?: string,
      public jobtitle2?: string,
      public jobtitle3?: string,
      public jobtitle4?: string,
      public jobdate1?: string,
      public jobdate2?: string,
      public jobdate3?: string,
      public jobdate4?: string,
      public jobwhere1?: string,
      public jobwhere2?: string,
      public jobwhere3?: string,
      public jobwhere4?: string,
      public jobdetail11?: string,
      public jobdetail12?: string,
      public jobdetail13?: string,
      public jobdetail21?: string,
      public jobdetail22?: string,
      public jobdetail23?: string,
      ) { }
}
    
export class infoData {
  constructor (
    public langname1?: string,
    public langname2?: string,
    public langname3?: string,
    public langname4?: string,
    public langlvl1?: string,
    public langlvl2?: string,
    public langlvl3?: string,
    public langlvl4?: string,
    public info1?: string,
    public info2?: string,
    public info3?: string,
    public info4?: string,
    public info5?: string,
    public info6?: string,
    public info7?: string,
    public dropdownEnclosure?: string,
    public enclosure?: string,
    public link?: string,
    public linkname?: string
    ) { }
}