// audit trails are event just like logs of db or application

/**
 * problem that i identify
 * Repitition each task stores its own reference to audit-trail
 *
 */
// class TransferMoneyTask {
//   auditTrail: AuditTrail;

//   constructor(auditTrail: AuditTrail) {
//     this.auditTrail = auditTrail;
//   }
//   public execute() {
//     this.auditTrail.record();
//     console.log("transfer money task execute");
//   }
// }

// class AuditTrail {
//   public record() {
//     console.log("audit");
//   }
// }

// class GenerateReportTask {
//   auditTrail: AuditTrail;
//   constructor(auditTrail: AuditTrail) {
//     this.auditTrail = auditTrail;
//   }

//   public execute() {
//     this.auditTrail.record();
//     console.log("generate report");
//   }
// }
