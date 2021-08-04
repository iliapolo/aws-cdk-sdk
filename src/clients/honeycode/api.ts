import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class HoneycodeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public fetchScreenData(input: shapes.HoneycodeGetScreenDataRequest): HoneycodeResponsesFetchScreenData {
    return new HoneycodeResponsesFetchScreenData(this, this.__resources, input);
  }

  public invokeScreenAutomation(input: shapes.HoneycodeInvokeScreenAutomationRequest): HoneycodeResponsesInvokeScreenAutomation {
    return new HoneycodeResponsesInvokeScreenAutomation(this, this.__resources, input);
  }

}

export class HoneycodeResponsesFetchScreenData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeGetScreenDataRequest) {
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
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          variables: this.__input.variables,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScreenData.results', props);
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
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          variables: this.__input.variables,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScreenData.workbookCursor', props);
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
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          variables: this.__input.variables,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScreenData.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HoneycodeResponsesInvokeScreenAutomation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeInvokeScreenAutomationRequest) {
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
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          screenAutomationId: this.__input.screenAutomationId,
          variables: this.__input.variables,
          rowId: this.__input.rowId,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InvokeScreenAutomation.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

