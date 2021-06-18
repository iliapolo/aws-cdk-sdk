import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class HoneycodeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchScreenData(input: shapes.HoneycodeGetScreenDataRequest): HoneycodeFetchScreenData {
    return new HoneycodeFetchScreenData(this, 'FetchScreenData', this.__resources, input);
  }

  public invokeScreenAutomation(input: shapes.HoneycodeInvokeScreenAutomationRequest): HoneycodeInvokeScreenAutomation {
    return new HoneycodeInvokeScreenAutomation(this, 'InvokeScreenAutomation', this.__resources, input);
  }

}

export class HoneycodeFetchScreenData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HoneycodeGetScreenDataRequest) {
    super(scope, id);
  }

  public get results(): Record<string, shapes.HoneycodeResultSet> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScreenData',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.GetScreenData.results'),
        outputPath: 'results',
        parameters: {
          workbookId: this.input.workbookId,
          appId: this.input.appId,
          screenId: this.input.screenId,
          variables: this.input.variables,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetScreenData.results', props);
    return resource.getResponseField('results') as unknown as Record<string, shapes.HoneycodeResultSet>;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScreenData',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.GetScreenData.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.input.workbookId,
          appId: this.input.appId,
          screenId: this.input.screenId,
          variables: this.input.variables,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetScreenData.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScreenData',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.GetScreenData.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          workbookId: this.input.workbookId,
          appId: this.input.appId,
          screenId: this.input.screenId,
          variables: this.input.variables,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetScreenData.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HoneycodeInvokeScreenAutomation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.HoneycodeInvokeScreenAutomationRequest) {
    super(scope, id);
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invokeScreenAutomation',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.InvokeScreenAutomation.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.input.workbookId,
          appId: this.input.appId,
          screenId: this.input.screenId,
          screenAutomationId: this.input.screenAutomationId,
          variables: this.input.variables,
          rowId: this.input.rowId,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InvokeScreenAutomation.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

