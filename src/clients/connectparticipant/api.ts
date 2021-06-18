import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ConnectParticipantClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createParticipantConnection(input: shapes.ConnectParticipantCreateParticipantConnectionRequest): ConnectParticipantCreateParticipantConnection {
    return new ConnectParticipantCreateParticipantConnection(this, 'CreateParticipantConnection', this.__resources, input);
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

  public fetchTranscript(input: shapes.ConnectParticipantGetTranscriptRequest): ConnectParticipantFetchTranscript {
    return new ConnectParticipantFetchTranscript(this, 'FetchTranscript', this.__resources, input);
  }

  public sendEvent(input: shapes.ConnectParticipantSendEventRequest): ConnectParticipantSendEvent {
    return new ConnectParticipantSendEvent(this, 'SendEvent', this.__resources, input);
  }

  public sendMessage(input: shapes.ConnectParticipantSendMessageRequest): ConnectParticipantSendMessage {
    return new ConnectParticipantSendMessage(this, 'SendMessage', this.__resources, input);
  }

}

export class ConnectParticipantCreateParticipantConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectParticipantCreateParticipantConnectionRequest) {
    super(scope, id);
  }

  public get websocket(): ConnectParticipantCreateParticipantConnectionWebsocket {
    return new ConnectParticipantCreateParticipantConnectionWebsocket(this, 'Websocket', this.__resources, this.input);
  }

  public get connectionCredentials(): ConnectParticipantCreateParticipantConnectionConnectionCredentials {
    return new ConnectParticipantCreateParticipantConnectionConnectionCredentials(this, 'ConnectionCredentials', this.__resources, this.input);
  }

}

export class ConnectParticipantCreateParticipantConnectionWebsocket extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectParticipantCreateParticipantConnectionRequest) {
    super(scope, id);
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
          Type: this.input.type,
          ParticipantToken: this.input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParticipantConnection.Websocket.Url', props);
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
          Type: this.input.type,
          ParticipantToken: this.input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParticipantConnection.Websocket.ConnectionExpiry', props);
    return resource.getResponseField('Websocket.ConnectionExpiry') as unknown as string;
  }

}

export class ConnectParticipantCreateParticipantConnectionConnectionCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectParticipantCreateParticipantConnectionRequest) {
    super(scope, id);
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
          Type: this.input.type,
          ParticipantToken: this.input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParticipantConnection.ConnectionCredentials.ConnectionToken', props);
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
          Type: this.input.type,
          ParticipantToken: this.input.participantToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParticipantConnection.ConnectionCredentials.Expiry', props);
    return resource.getResponseField('ConnectionCredentials.Expiry') as unknown as string;
  }

}

export class ConnectParticipantFetchTranscript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectParticipantGetTranscriptRequest) {
    super(scope, id);
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
          ContactId: this.input.contactId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ScanDirection: this.input.scanDirection,
          SortOrder: this.input.sortOrder,
          StartPosition: {
            Id: this.input.startPosition?.id,
            AbsoluteTime: this.input.startPosition?.absoluteTime,
            MostRecent: this.input.startPosition?.mostRecent,
          },
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTranscript.InitialContactId', props);
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
          ContactId: this.input.contactId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ScanDirection: this.input.scanDirection,
          SortOrder: this.input.sortOrder,
          StartPosition: {
            Id: this.input.startPosition?.id,
            AbsoluteTime: this.input.startPosition?.absoluteTime,
            MostRecent: this.input.startPosition?.mostRecent,
          },
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTranscript.Transcript', props);
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
          ContactId: this.input.contactId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ScanDirection: this.input.scanDirection,
          SortOrder: this.input.sortOrder,
          StartPosition: {
            Id: this.input.startPosition?.id,
            AbsoluteTime: this.input.startPosition?.absoluteTime,
            MostRecent: this.input.startPosition?.mostRecent,
          },
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTranscript.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ConnectParticipantSendEvent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectParticipantSendEventRequest) {
    super(scope, id);
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
          ContentType: this.input.contentType,
          Content: this.input.content,
          ClientToken: this.input.clientToken,
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendEvent.Id', props);
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
          ContentType: this.input.contentType,
          Content: this.input.content,
          ClientToken: this.input.clientToken,
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendEvent.AbsoluteTime', props);
    return resource.getResponseField('AbsoluteTime') as unknown as string;
  }

}

export class ConnectParticipantSendMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ConnectParticipantSendMessageRequest) {
    super(scope, id);
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
          ContentType: this.input.contentType,
          Content: this.input.content,
          ClientToken: this.input.clientToken,
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.Id', props);
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
          ContentType: this.input.contentType,
          Content: this.input.content,
          ClientToken: this.input.clientToken,
          ConnectionToken: this.input.connectionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendMessage.AbsoluteTime', props);
    return resource.getResponseField('AbsoluteTime') as unknown as string;
  }

}

