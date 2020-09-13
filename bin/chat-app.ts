#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ChatAppStack } from '../lib/chat-app-stack';

const app = new cdk.App();
new ChatAppStack(app, 'ChatAppStack');
