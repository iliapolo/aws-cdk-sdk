import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class QldbSessionClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public sendCommand(input: shapes.QldbSessionSendCommandRequest): QLDBSessionSendCommand {
    return new QLDBSessionSendCommand(this, 'SendCommand', this.__resources, input);
  }

}

export class QLDBSessionSendCommand extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
  }

  public get startSession(): QLDBSessionSendCommandStartSession {
    return new QLDBSessionSendCommandStartSession(this, 'StartSession', this.__resources, this.input);
  }

  public get startTransaction(): QLDBSessionSendCommandStartTransaction {
    return new QLDBSessionSendCommandStartTransaction(this, 'StartTransaction', this.__resources, this.input);
  }

  public get endSession(): QLDBSessionSendCommandEndSession {
    return new QLDBSessionSendCommandEndSession(this, 'EndSession');
  }

  public get commitTransaction(): QLDBSessionSendCommandCommitTransaction {
    return new QLDBSessionSendCommandCommitTransaction(this, 'CommitTransaction', this.__resources, this.input);
  }

  public get abortTransaction(): QLDBSessionSendCommandAbortTransaction {
    return new QLDBSessionSendCommandAbortTransaction(this, 'AbortTransaction');
  }

  public get executeStatement(): QLDBSessionSendCommandExecuteStatement {
    return new QLDBSessionSendCommandExecuteStatement(this, 'ExecuteStatement', this.__resources, this.input);
  }

  public get fetchPage(): QLDBSessionSendCommandFetchPage {
    return new QLDBSessionSendCommandFetchPage(this, 'FetchPage', this.__resources, this.input);
  }

}

export class QLDBSessionSendCommandStartSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.StartSession.SessionToken', props);
    return resource.getResponseField('StartSession.SessionToken') as unknown as string;
  }

}

export class QLDBSessionSendCommandStartTransaction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.StartTransaction.TransactionId', props);
    return resource.getResponseField('StartTransaction.TransactionId') as unknown as string;
  }

}

export class QLDBSessionSendCommandEndSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class QLDBSessionSendCommandCommitTransaction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.CommitTransaction.TransactionId', props);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.CommitTransaction.CommitDigest', props);
    return resource.getResponseField('CommitTransaction.CommitDigest') as unknown as any;
  }

}

export class QLDBSessionSendCommandAbortTransaction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class QLDBSessionSendCommandExecuteStatement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
  }

  public get firstPage(): QLDBSessionSendCommandExecuteStatementFirstPage {
    return new QLDBSessionSendCommandExecuteStatementFirstPage(this, 'FirstPage', this.__resources, this.input);
  }

}

export class QLDBSessionSendCommandExecuteStatementFirstPage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.ExecuteStatement.FirstPage.Values', props);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.ExecuteStatement.FirstPage.NextPageToken', props);
    return resource.getResponseField('ExecuteStatement.FirstPage.NextPageToken') as unknown as string;
  }

}

export class QLDBSessionSendCommandFetchPage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
  }

  public get page(): QLDBSessionSendCommandFetchPagePage {
    return new QLDBSessionSendCommandFetchPagePage(this, 'Page', this.__resources, this.input);
  }

}

export class QLDBSessionSendCommandFetchPagePage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QldbSessionSendCommandRequest) {
    super(scope, id);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.FetchPage.Page.Values', props);
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
          SessionToken: this.input.sessionToken,
          StartSession: {
            LedgerName: this.input.startSession?.ledgerName,
          },
          StartTransaction: {
          },
          EndSession: {
          },
          CommitTransaction: {
            TransactionId: this.input.commitTransaction?.transactionId,
            CommitDigest: {
            },
          },
          AbortTransaction: {
          },
          ExecuteStatement: {
            TransactionId: this.input.executeStatement?.transactionId,
            Statement: this.input.executeStatement?.statement,
            Parameters: this.input.executeStatement?.parameters,
          },
          FetchPage: {
            TransactionId: this.input.fetchPage?.transactionId,
            NextPageToken: this.input.fetchPage?.nextPageToken,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.FetchPage.Page.NextPageToken', props);
    return resource.getResponseField('FetchPage.Page.NextPageToken') as unknown as string;
  }

}

