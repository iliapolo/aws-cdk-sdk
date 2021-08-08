import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppIntegrationsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createEventIntegration(input: shapes.AppIntegrationsCreateEventIntegrationRequest): AppIntegrationsResponsesCreateEventIntegration {
    return new AppIntegrationsResponsesCreateEventIntegration(this, this.__resources, input);
  }

  public deleteEventIntegration(input: shapes.AppIntegrationsDeleteEventIntegrationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.DeleteEventIntegration'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEventIntegration', props);
  }

  public fetchEventIntegration(input: shapes.AppIntegrationsGetEventIntegrationRequest): AppIntegrationsResponsesFetchEventIntegration {
    return new AppIntegrationsResponsesFetchEventIntegration(this, this.__resources, input);
  }

  public listEventIntegrationAssociations(input: shapes.AppIntegrationsListEventIntegrationAssociationsRequest): AppIntegrationsResponsesListEventIntegrationAssociations {
    return new AppIntegrationsResponsesListEventIntegrationAssociations(this, this.__resources, input);
  }

  public listEventIntegrations(input: shapes.AppIntegrationsListEventIntegrationsRequest): AppIntegrationsResponsesListEventIntegrations {
    return new AppIntegrationsResponsesListEventIntegrations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppIntegrationsListTagsForResourceRequest): AppIntegrationsResponsesListTagsForResource {
    return new AppIntegrationsResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.AppIntegrationsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppIntegrationsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateEventIntegration(input: shapes.AppIntegrationsUpdateEventIntegrationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.UpdateEventIntegration'),
        parameters: {
          Name: input.name,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateEventIntegration', props);
  }

}

export class AppIntegrationsResponsesCreateEventIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppIntegrationsCreateEventIntegrationRequest) {
  }

  public get eventIntegrationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.CreateEventIntegration.EventIntegrationArn'),
        outputPath: 'EventIntegrationArn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          EventFilter: {
            Source: this.__input.eventFilter.source,
          },
          EventBridgeBus: this.__input.eventBridgeBus,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEventIntegration.EventIntegrationArn', props);
    return resource.getResponseField('EventIntegrationArn') as unknown as string;
  }

}

export class AppIntegrationsResponsesFetchEventIntegration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppIntegrationsGetEventIntegrationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.GetEventIntegration.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventIntegration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.GetEventIntegration.Description'),
        outputPath: 'Description',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventIntegration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get eventIntegrationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.GetEventIntegration.EventIntegrationArn'),
        outputPath: 'EventIntegrationArn',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventIntegration.EventIntegrationArn', props);
    return resource.getResponseField('EventIntegrationArn') as unknown as string;
  }

  public get eventBridgeBus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.GetEventIntegration.EventBridgeBus'),
        outputPath: 'EventBridgeBus',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventIntegration.EventBridgeBus', props);
    return resource.getResponseField('EventBridgeBus') as unknown as string;
  }

  public get eventFilter(): AppIntegrationsResponsesFetchEventIntegrationEventFilter {
    return new AppIntegrationsResponsesFetchEventIntegrationEventFilter(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.GetEventIntegration.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventIntegration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class AppIntegrationsResponsesFetchEventIntegrationEventFilter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppIntegrationsGetEventIntegrationRequest) {
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEventIntegration',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.GetEventIntegration.EventFilter.Source'),
        outputPath: 'EventFilter.Source',
        parameters: {
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEventIntegration.EventFilter.Source', props);
    return resource.getResponseField('EventFilter.Source') as unknown as string;
  }

}

export class AppIntegrationsResponsesListEventIntegrationAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppIntegrationsListEventIntegrationAssociationsRequest) {
  }

  public get eventIntegrationAssociations(): shapes.AppIntegrationsEventIntegrationAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventIntegrationAssociations',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.ListEventIntegrationAssociations.EventIntegrationAssociations'),
        outputPath: 'EventIntegrationAssociations',
        parameters: {
          EventIntegrationName: this.__input.eventIntegrationName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventIntegrationAssociations.EventIntegrationAssociations', props);
    return resource.getResponseField('EventIntegrationAssociations') as unknown as shapes.AppIntegrationsEventIntegrationAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventIntegrationAssociations',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.ListEventIntegrationAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EventIntegrationName: this.__input.eventIntegrationName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventIntegrationAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppIntegrationsResponsesListEventIntegrations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppIntegrationsListEventIntegrationsRequest) {
  }

  public get eventIntegrations(): shapes.AppIntegrationsEventIntegration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventIntegrations',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.ListEventIntegrations.EventIntegrations'),
        outputPath: 'EventIntegrations',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventIntegrations.EventIntegrations', props);
    return resource.getResponseField('EventIntegrations') as unknown as shapes.AppIntegrationsEventIntegration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEventIntegrations',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.ListEventIntegrations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEventIntegrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppIntegrationsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppIntegrationsListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AppIntegrations',
        physicalResourceId: cr.PhysicalResourceId.of('AppIntegrations.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

