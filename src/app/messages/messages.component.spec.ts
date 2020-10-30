import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../message.service';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let messageService: MessageService;
  beforeEach(() => {
    messageService = new MessageService();
  });
  describe('addHero', ()=>{
    it('Should add the message to the array', () =>{
      messageService.add('Hero message');
      expect(messageService.messages.length).toBe(1);
    })
  })  
});
