// using polymorphism
//
abstract class Task {
  constructor(public trail: AuditTrail) {}
  // templating execute
  // Task is extendible but closed for modifications
  public execute() {
    this.trail.record();
    this.doExecute();
  }
  // create custom execute method
  // protected abstract doExecute(): unknown;
  protected abstract doExecute(): void;
}

export class TransferMoneyTask extends Task {
  // implementing execute method
  /*
   execute(){
     this.trail.record();
     console.log('transfer money');
   }
  */
  doExecute() {
    console.log("transfer money");
  }
}

export class AuditTrail {
  public record() {
    console.log("audit");
  }
}

export class GenerateReportTask extends Task {
  doExecute() {
    console.log("generate report");
  }
}
