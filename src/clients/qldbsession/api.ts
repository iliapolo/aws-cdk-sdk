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

  public get endSession(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.EndSession'),
        outputPath: 'EndSession',
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
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.EndSession', props);
    return resource.getResponseField('EndSession') as unknown as any;
  }

  public get commitTransaction(): QLDBSessionResponsesSendCommandCommitTransaction {
    return new QLDBSessionResponsesSendCommandCommitTransaction(this.__scope, this.__resources, this.__input);
  }

  public get abortTransaction(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'QLDBSession',
        physicalResourceId: cr.PhysicalResourceId.of('QLDBSession.SendCommand.AbortTransaction'),
        outputPath: 'AbortTransaction',
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
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.AbortTransaction', props);
    return resource.getResponseField('AbortTransaction') as unknown as any;
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

}

export class QLDBSessionResponsesSendCommandExecuteStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get firstPage(): QLDBSessionResponsesSendCommandExecuteStatementFirstPage {
    return new QLDBSessionResponsesSendCommandExecuteStatementFirstPage(this.__scope, this.__resources, this.__input);
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

export class QLDBSessionResponsesSendCommandFetchPage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QldbSessionSendCommandRequest) {
  }

  public get page(): QLDBSessionResponsesSendCommandFetchPagePage {
    return new QLDBSessionResponsesSendCommandFetchPagePage(this.__scope, this.__resources, this.__input);
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

