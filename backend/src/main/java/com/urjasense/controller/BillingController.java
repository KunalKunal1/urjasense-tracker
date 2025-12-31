package com.urjasense.controller;

import com.urjasense.dto.BillRequest;
import com.urjasense.dto.BillResponse;
import com.urjasense.service.BillingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/billing")
@RequiredArgsConstructor
public class BillingController {

    private final BillingService billingService;

    @PostMapping("/calculate")
    public BillResponse calculateBill(@RequestBody BillRequest request) {
        double amount = billingService.calculateIndiaBill(request.getUnits(), request.getState());
        return new BillResponse(request.getUnits(), request.getState(), amount, "INR");
    }

    @GetMapping("/health")
    public String health() {
        return "UrjaSense Billing API is up!";
    }
}
