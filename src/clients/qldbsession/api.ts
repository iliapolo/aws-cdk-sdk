import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class QldbSessionClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public sendCommand(input: shapes.QldbSessionSendCommandRequest): QLDBSessionResponsesSendCommand {
    return new QLDBSessionResponsesSendCommand(this, this.__resources, input);
  }

}

export class QLDBSessionResponsesSendCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get startSession(): QLDBSessionResponsesSendCommandStartSession {
    return new QLDBSessionResponsesSendCommandStartSession(this.__scope, this.__resources, this.__input);
  }

  public get startTransaction(): QLDBSessionResponsesSendCommandStartTransaction {
    return new QLDBSessionResponsesSendCommandStartTransaction(this.__scope, this.__resources, this.__input);
  }

  public get endSession(): QLDBSessionResponsesSendCommandEndSession {
    return new QLDBSessionResponsesSendCommandEndSession(this.__scope, this.__resources, this.__input);
  }

  public get commitTransaction(): QLDBSessionResponsesSendCommandCommitTransaction {
    return new QLDBSessionResponsesSendCommandCommitTransaction(this.__scope, this.__resources, this.__input);
  }

  public get abortTransaction(): QLDBSessionResponsesSendCommandAbortTransaction {
    return new QLDBSessionResponsesSendCommandAbortTransaction(this.__scope, this.__resources, this.__input);
  }

  public get executeStatement(): QLDBSessionResponsesSendCommandExecuteStatement {
    return new QLDBSessionResponsesSendCommandExecuteStatement(this.__scope, this.__resources, this.__input);
  }

  public get fetchPage(): QLDBSessionResponsesSendCommandFetchPage {
    return new QLDBSessionResponsesSendCommandFetchPage(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandStartSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get sessionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.StartSession.SessionToken'),
        outputPath: 'StartSession.SessionToken',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.StartSession.SessionToken', props);
    return resource.getResponseField('StartSession.SessionToken') as unknown as string;
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandStartSessionTimingInformation {
    return new QLDBSessionResponsesSendCommandStartSessionTimingInformation(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandStartSessionTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.StartSession.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'StartSession.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.StartSession.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('StartSession.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandStartTransaction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get transactionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.StartTransaction.TransactionId'),
        outputPath: 'StartTransaction.TransactionId',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.StartTransaction.TransactionId', props);
    return resource.getResponseField('StartTransaction.TransactionId') as unknown as string;
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandStartTransactionTimingInformation {
    return new QLDBSessionResponsesSendCommandStartTransactionTimingInformation(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandStartTransactionTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.StartTransaction.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'StartTransaction.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.StartTransaction.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('StartTransaction.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandEndSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandEndSessionTimingInformation {
    return new QLDBSessionResponsesSendCommandEndSessionTimingInformation(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandEndSessionTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.EndSession.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'EndSession.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.EndSession.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('EndSession.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandCommitTransaction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get transactionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.CommitTransaction.TransactionId'),
        outputPath: 'CommitTransaction.TransactionId',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.CommitTransaction.TransactionId', props);
    return resource.getResponseField('CommitTransaction.TransactionId') as unknown as string;
  }

  public get commitDigest(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.CommitTransaction.CommitDigest'),
        outputPath: 'CommitTransaction.CommitDigest',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.CommitTransaction.CommitDigest', props);
    return resource.getResponseField('CommitTransaction.CommitDigest') as unknown as any;
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandCommitTransactionTimingInformation {
    return new QLDBSessionResponsesSendCommandCommitTransactionTimingInformation(this.__scope, this.__resources, this.__input);
  }

  public get consumedIOs(): QLDBSessionResponsesSendCommandCommitTransactionConsumedIOs {
    return new QLDBSessionResponsesSendCommandCommitTransactionConsumedIOs(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandCommitTransactionTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.CommitTransaction.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'CommitTransaction.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.CommitTransaction.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('CommitTransaction.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandCommitTransactionConsumedIOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get readIOs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.CommitTransaction.ConsumedIOs.ReadIOs'),
        outputPath: 'CommitTransaction.ConsumedIOs.ReadIOs',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.CommitTransaction.ConsumedIOs.ReadIOs', props);
    return resource.getResponseField('CommitTransaction.ConsumedIOs.ReadIOs') as unknown as number;
  }

  public get writeIOs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.CommitTransaction.ConsumedIOs.WriteIOs'),
        outputPath: 'CommitTransaction.ConsumedIOs.WriteIOs',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.CommitTransaction.ConsumedIOs.WriteIOs', props);
    return resource.getResponseField('CommitTransaction.ConsumedIOs.WriteIOs') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandAbortTransaction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandAbortTransactionTimingInformation {
    return new QLDBSessionResponsesSendCommandAbortTransactionTimingInformation(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandAbortTransactionTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.AbortTransaction.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'AbortTransaction.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.AbortTransaction.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('AbortTransaction.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandExecuteStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get firstPage(): QLDBSessionResponsesSendCommandExecuteStatementFirstPage {
    return new QLDBSessionResponsesSendCommandExecuteStatementFirstPage(this.__scope, this.__resources, this.__input);
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandExecuteStatementTimingInformation {
    return new QLDBSessionResponsesSendCommandExecuteStatementTimingInformation(this.__scope, this.__resources, this.__input);
  }

  public get consumedIOs(): QLDBSessionResponsesSendCommandExecuteStatementConsumedIOs {
    return new QLDBSessionResponsesSendCommandExecuteStatementConsumedIOs(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandExecuteStatementFirstPage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get values(): shapes.QldbSessionValueHolder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.ExecuteStatement.FirstPage.Values'),
        outputPath: 'ExecuteStatement.FirstPage.Values',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.ExecuteStatement.FirstPage.Values', props);
    return resource.getResponseField('ExecuteStatement.FirstPage.Values') as unknown as shapes.QldbSessionValueHolder[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.ExecuteStatement.FirstPage.NextPageToken'),
        outputPath: 'ExecuteStatement.FirstPage.NextPageToken',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.ExecuteStatement.FirstPage.NextPageToken', props);
    return resource.getResponseField('ExecuteStatement.FirstPage.NextPageToken') as unknown as string;
  }

}

export class QLDBSessionResponsesSendCommandExecuteStatementTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.ExecuteStatement.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'ExecuteStatement.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.ExecuteStatement.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('ExecuteStatement.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandExecuteStatementConsumedIOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get readIOs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.ExecuteStatement.ConsumedIOs.ReadIOs'),
        outputPath: 'ExecuteStatement.ConsumedIOs.ReadIOs',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.ExecuteStatement.ConsumedIOs.ReadIOs', props);
    return resource.getResponseField('ExecuteStatement.ConsumedIOs.ReadIOs') as unknown as number;
  }

  public get writeIOs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.ExecuteStatement.ConsumedIOs.WriteIOs'),
        outputPath: 'ExecuteStatement.ConsumedIOs.WriteIOs',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.ExecuteStatement.ConsumedIOs.WriteIOs', props);
    return resource.getResponseField('ExecuteStatement.ConsumedIOs.WriteIOs') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandFetchPage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get page(): QLDBSessionResponsesSendCommandFetchPagePage {
    return new QLDBSessionResponsesSendCommandFetchPagePage(this.__scope, this.__resources, this.__input);
  }

  public get timingInformation(): QLDBSessionResponsesSendCommandFetchPageTimingInformation {
    return new QLDBSessionResponsesSendCommandFetchPageTimingInformation(this.__scope, this.__resources, this.__input);
  }

  public get consumedIOs(): QLDBSessionResponsesSendCommandFetchPageConsumedIOs {
    return new QLDBSessionResponsesSendCommandFetchPageConsumedIOs(this.__scope, this.__resources, this.__input);
  }

}

export class QLDBSessionResponsesSendCommandFetchPagePage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get values(): shapes.QldbSessionValueHolder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.FetchPage.Page.Values'),
        outputPath: 'FetchPage.Page.Values',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.FetchPage.Page.Values', props);
    return resource.getResponseField('FetchPage.Page.Values') as unknown as shapes.QldbSessionValueHolder[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.FetchPage.Page.NextPageToken'),
        outputPath: 'FetchPage.Page.NextPageToken',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.FetchPage.Page.NextPageToken', props);
    return resource.getResponseField('FetchPage.Page.NextPageToken') as unknown as string;
  }

}

export class QLDBSessionResponsesSendCommandFetchPageTimingInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get processingTimeMilliseconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.FetchPage.TimingInformation.ProcessingTimeMilliseconds'),
        outputPath: 'FetchPage.TimingInformation.ProcessingTimeMilliseconds',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.FetchPage.TimingInformation.ProcessingTimeMilliseconds', props);
    return resource.getResponseField('FetchPage.TimingInformation.ProcessingTimeMilliseconds') as unknown as number;
  }

}

export class QLDBSessionResponsesSendCommandFetchPageConsumedIOs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get readIOs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.FetchPage.ConsumedIOs.ReadIOs'),
        outputPath: 'FetchPage.ConsumedIOs.ReadIOs',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.FetchPage.ConsumedIOs.ReadIOs', props);
    return resource.getResponseField('FetchPage.ConsumedIOs.ReadIOs') as unknown as number;
  }

  public get writeIOs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.FetchPage.ConsumedIOs.WriteIOs'),
        outputPath: 'FetchPage.ConsumedIOs.WriteIOs',
        parameters: {
          SessionToken: this.__input.sessionToken,
          StartSession: {
            LedgerName: this.__input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.__input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.__input.executeStatement?.transactionId,
            Statement: this.__input.executeStatement?.statement,
            Parameters: this.__input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.__input.fetchPage?.transactionId,
            NextPageToken: this.__input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.FetchPage.ConsumedIOs.WriteIOs', props);
    return resource.getResponseField('FetchPage.ConsumedIOs.WriteIOs') as unknown as number;
  }

}

