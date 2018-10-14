// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";
// Sends a single message to the content script(s) in the specified tab(tab.id).
chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, "removeImage");
});
