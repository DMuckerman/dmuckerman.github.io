(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:63801" {:asset-host nil, :on-jsload (fn* [] (+))})