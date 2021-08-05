import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ConnectParticipantClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createParticipantConnection(input: shapes.ConnectParticipantCreateParticipantConnectionRequest): ConnectParticipantResponsesCreateParticipantConnection {
    return new ConnectParticipantResponsesCreateParticipantConnection(this, this.__resources, input);
  }

  public disconnectParticipant(input: shapes.ConnectParticipantDisconnectParticipantRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disconnectParticipant',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.DisconnectParticipant'),
        parameters: {
          ClientToken: input.clientToken,
          ConnectionToken: input.connectionToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisconnectParticipant', props);
  }

  public fetchTranscript(input: shapes.ConnectParticipantGetTranscriptRequest): ConnectParticipantResponsesFetchTranscript {
    return new ConnectParticipantResponsesFetchTranscript(this, this.__resources, input);
  }

  public sendEvent(input: shapes.ConnectParticipantSendEventRequest): ConnectParticipantResponsesSendEvent {
    return new ConnectParticipantResponsesSendEvent(this, this.__resources, input);
  }

  public sendMessage(input: shapes.ConnectParticipantSendMessageRequest): ConnectParticipantResponsesSendMessage {
    return new ConnectParticipantResponsesSendMessage(this, this.__resources, input);
  }

}

export class ConnectParticipantResponsesCreateParticipantConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectParticipantCreateParticipantConnectionRequest) {
  }

  public get websocket(): ConnectParticipantResponsesCreateParticipantConnectionWebsocket {
    return new ConnectParticipantResponsesCreateParticipantConnectionWebsocket(this.__scope, this.__resources, this.__input);
  }

  public get connectionCredentials(): ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials {
    return new ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials(this.__scope, this.__resources, this.__input);
  }

}

export class ConnectParticipantResponsesCreateParticipantConnectionWebsocket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectParticipantCreateParticipantConnectionRequest) {
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParticipantConnection',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.CreateParticipantConnection.Websocket.Url'),
        outputPath: 'Websocket.Url',
        parameters: {
          Type: this.__input.type,
          ParticipantToken: this.__input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParticipantConnection.Websocket.Url', props);
    return resource.getResponseField('Websocket.Url') as unknown as string;
  }

  public get connectionExpiry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParticipantConnection',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.CreateParticipantConnection.Websocket.ConnectionExpiry'),
        outputPath: 'Websocket.ConnectionExpiry',
        parameters: {
          Type: this.__input.type,
          ParticipantToken: this.__input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParticipantConnection.Websocket.ConnectionExpiry', props);
    return resource.getResponseField('Websocket.ConnectionExpiry') as unknown as string;
  }

}

export class ConnectParticipantResponsesCreateParticipantConnectionConnectionCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectParticipantCreateParticipantConnectionRequest) {
  }

  public get connectionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParticipantConnection',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.CreateParticipantConnection.ConnectionCredentials.ConnectionToken'),
        outputPath: 'ConnectionCredentials.ConnectionToken',
        parameters: {
          Type: this.__input.type,
          ParticipantToken: this.__input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParticipantConnection.ConnectionCredentials.ConnectionToken', props);
    return resource.getResponseField('ConnectionCredentials.ConnectionToken') as unknown as string;
  }

  public get expiry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParticipantConnection',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.CreateParticipantConnection.ConnectionCredentials.Expiry'),
        outputPath: 'ConnectionCredentials.Expiry',
        parameters: {
          Type: this.__input.type,
          ParticipantToken: this.__input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParticipantConnection.ConnectionCredentials.Expiry', props);
    return resource.getResponseField('ConnectionCredentials.Expiry') as unknown as string;
  }

}

export class ConnectParticipantResponsesFetchTranscript {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectParticipantGetTranscriptRequest) {
  }

  public get initialContactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTranscript',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.GetTranscript.InitialContactId'),
        outputPath: 'InitialContactId',
        parameters: {
          ContactId: this.__input.contactId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ScanDirection: this.__input.scanDirection,
          SortOrder: this.__input.sortOrder,
          StartPosition: {
            Id: this.__input.startPosition?.id,
            AbsoluteTime: this.__input.startPosition?.absoluteTime,
            MostRecent: this.__input.startPosition?.mostRecent,
          },
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTranscript.InitialContactId', props);
    return resource.getResponseField('InitialContactId') as unknown as string;
  }

  public get transcript(): shapes.ConnectParticipantItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTranscript',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.GetTranscript.Transcript'),
        outputPath: 'Transcript',
        parameters: {
          ContactId: this.__input.contactId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ScanDirection: this.__input.scanDirection,
          SortOrder: this.__input.sortOrder,
          StartPosition: {
            Id: this.__input.startPosition?.id,
            AbsoluteTime: this.__input.startPosition?.absoluteTime,
            MostRecent: this.__input.startPosition?.mostRecent,
          },
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTranscript.Transcript', props);
    return resource.getResponseField('Transcript') as unknown as shapes.ConnectParticipantItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTranscript',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.GetTranscript.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ContactId: this.__input.contactId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ScanDirection: this.__input.scanDirection,
          SortOrder: this.__input.sortOrder,
          StartPosition: {
            Id: this.__input.startPosition?.id,
            AbsoluteTime: this.__input.startPosition?.absoluteTime,
            MostRecent: this.__input.startPosition?.mostRecent,
          },
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTranscript.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectParticipantResponsesSendEvent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectParticipantSendEventRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendEvent',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.SendEvent.Id'),
        outputPath: 'Id',
        parameters: {
          ContentType: this.__input.contentType,
          Content: this.__input.content,
          ClientToken: this.__input.clientToken,
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendEvent.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get absoluteTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendEvent',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.SendEvent.AbsoluteTime'),
        outputPath: 'AbsoluteTime',
        parameters: {
          ContentType: this.__input.contentType,
          Content: this.__input.content,
          ClientToken: this.__input.clientToken,
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendEvent.AbsoluteTime', props);
    return resource.getResponseField('AbsoluteTime') as unknown as string;
  }

}

export class ConnectParticipantResponsesSendMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ConnectParticipantSendMessageRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.SendMessage.Id'),
        outputPath: 'Id',
        parameters: {
          ContentType: this.__input.contentType,
          Content: this.__input.content,
          ClientToken: this.__input.clientToken,
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get absoluteTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendMessage',
        service: 'ConnectParticipant',
        physicalResourceId: cr.PhysicalResourceId.of('ConnectParticipant.SendMessage.AbsoluteTime'),
        outputPath: 'AbsoluteTime',
        parameters: {
          ContentType: this.__input.contentType,
          Content: this.__input.content,
          ClientToken: this.__input.clientToken,
          ConnectionToken: this.__input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendMessage.AbsoluteTime', props);
    return resource.getResponseField('AbsoluteTime') as unknown as string;
  }

}

