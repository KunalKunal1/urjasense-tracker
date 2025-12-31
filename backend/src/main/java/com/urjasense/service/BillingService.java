package com.urjasense.service;

import org.springframework.stereotype.Service;

@Service
public class BillingService {
    public double calculateIndiaBill(double units, String state) {
        double total;
        if (units <= 100) {
            total = units * 3.44;
        } else if (units <= 300) {
            total = (100 * 3.44) + (units - 100) * 7.34;
        } else {
            total = (100 * 3.44) + (200 * 7.34) + (units - 300) * 10.36;
        }
        return Math.round(total * 100.0) / 100.0;
    }
}
