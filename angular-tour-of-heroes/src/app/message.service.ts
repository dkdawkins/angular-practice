import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  // Expose cache of messages
  messages: string[] = [];

  // Add a message to the cache
  add(message: string) {
    this.messages.push(message);
  }

  // Clear the cache
  clear() {
    this.messages = [];
  }
}