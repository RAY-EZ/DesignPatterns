import { TransferMoneyTask, AuditTrail } from "./solution";

const task = new TransferMoneyTask(new AuditTrail());
task.execute();
